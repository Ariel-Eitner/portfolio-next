import React from "react";
import Link from "next/link";

interface Subsection {
  title: string;
}

interface Section {
  header: string;
  subsections?: Subsection[];
}

interface SummaryBoxProps {
  sections: Section[];
}

const SummaryBox: React.FC<SummaryBoxProps> = ({ sections }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {sections.map((section, sIndex) => {
        const sectionSlug = titleToSlug(section.header);
        let sectionIndex = sIndex + 1; // Restableciendo el índice de sección

        return (
          <React.Fragment key={sIndex}>
            {/* Sección */}
            <div className="py-1">
              <Link
                href={`#${sectionSlug}`}
                className="text-blue-600 hover:underline"
              >
                {sectionIndex}. {section.header}
              </Link>
            </div>

            {/* Subsecciones */}
            {section.subsections?.map((subsection, ssIndex) => {
              const subsectionSlug = titleToSlug(subsection.title);
              let subSectionIndex = ssIndex + 1; // Restableciendo el índice de subsección
              return (
                <div key={ssIndex} className="py-1 ">
                  <Link
                    href={`#${subsectionSlug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {sectionIndex}.{subSectionIndex} {subsection.title}
                  </Link>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SummaryBox;

function titleToSlug(title: string) {
  // Primero, reemplaza letras con acentos por letras sin acento
  const from = "áäàâéëèêíïìîóöòôúüùûñçÁÄÀÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇ";
  const to = "aaaaeeeeiiiioooouuuuncAAAAEEEEIIIIOOOOUUUUNC";
  for (let i = 0, l = from.length; i < l; i++) {
    title = title.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  // Luego, realiza los reemplazos ya definidos para hacer el slug más amigable para la URL
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remueve caracteres no alfanuméricos
    .replace(/\s+/g, "-") // Reemplaza espacios con guiones
    .replace(/-+/g, "-"); // Colapsa múltiples guiones consecutivos
}
