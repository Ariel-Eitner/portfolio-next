"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "../../../styles/custom-quill.css";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import {
  capitalizeTitle,
  generateSlug,
  processSections,
  validateTitle,
} from "@/components/post/functions/functions";
import blogPosts from "@/data/blogData";
import { PreviewButton } from "@/components/blogButton/previewButton";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NewPost() {
  const { user } = useUser();
  const router = useRouter();
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "image",
    "code-block",
  ];

  useEffect(() => {
    if (!user || user.email !== "ariel.10.e@hotmail.com") {
      router.push("/");
    }
  }, [user, router]);

  const saveContent = () => {
    if (!validateTitle(title)) return;

    const capitalizedTitle = capitalizeTitle(title);
    const slug = generateSlug(title);
    const sections = processSections(editorContent);
    const id = 2;

    const blogPost = {
      id: id,
      slug: slug,
      title: capitalizedTitle,
      sections: sections,
    };

    console.log(blogPost);
    return blogPost;
  };

  return (
    <div className="editor-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del Post"
        className="my-4 p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-transparent"
      />
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        style={{ height: "400px" }}
      />
      <button
        onClick={saveContent}
        className="mt-10 px-4 py-4 bg-blue-500  rounded"
      >
        Guardar
      </button>
      <PreviewButton />
    </div>
  );
}
