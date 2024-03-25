import React from "react";
import Link from "next/link"; // Asegúrate de importar Link desde 'next/link'

// import blogPosts from "@/data/blogData";
import SummaryBox from "@/components/post/sumaryBox/sumaryBox";
import ContentRenderer from "@/components/post/contentRenderer/contentRenderer";
import { BlogPost } from "@/data/blogData";

export default function Preview() {
  const blogPosts: BlogPost[] = [];
  const post = blogPosts.find((post) => post.slug === post.slug);

  return (
    <article className="flex flex-col items-center justify-center space-y-4 mx-auto">
      <h1 className="text-2xl font-bold">{post?.title}</h1>

      <SummaryBox sections={post?.sections || []} />
      <ContentRenderer sections={post?.sections || []} />
    </article>
  );
}
