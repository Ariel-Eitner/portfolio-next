interface ContentItem {
  type: "text" | "image" | "header" | "sectionTitle";
  data?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface Section {
  header?: string;
  content: ContentItem[];
  subsections?: Subsection[];
}

interface Subsection {
  title: string;
  content: ContentItem[];
}

import React from "react";

import Image from "next/image";
import { CheckoutButton } from "@/components/stripe/checkout-button";

interface ContentRendererProps {
  sections: Section[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ sections }) => {
  const renderContentItem = (item: ContentItem, index: number) => {
    const id = `${item.type}-${index}`;
    switch (item.type) {
      case "header":
        return (
          <h2 id={id} key={index} className="text-xl font-semibold">
            {item.data}
          </h2>
        );
      case "sectionTitle":
        return (
          <h3 id={id} key={index} className="text-lg font-semibold">
            {item.data}
          </h3>
        );
      case "text":
        return (
          <p key={index} className="text-base">
            {item.data}
          </p>
        );
      case "image":
        if (item.src && item.width && item.height) {
          return (
            <div key={index} className="my-4">
              {/* <Image
                src={item.src}
                alt={item.alt ?? ""}
                width={item.width}
                height={item.height}
                layout="responsive"
              /> */}
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {section.header && (
            <h1 className="text-2xl font-bold">{section.header}</h1>
          )}
          {section.content.map(renderContentItem)}
          {section.subsections?.map((subsection, subIndex) => (
            <React.Fragment key={`sub-${subIndex}`}>
              <h2 className="text-xl font-semibold">{subsection.title}</h2>
              {subsection.content.map(renderContentItem)}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContentRenderer;
