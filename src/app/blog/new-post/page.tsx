"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "../../../styles/custom-quill.css";

// Importa ReactQuill dinámicamente con SSR desactivado
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function NewPost() {
  const [editorContent, setEditorContent] = useState("");

  // Define tus módulos y formatos fuera del componente si no dependen de las props o el estado
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

  return (
    <div className="editor-container">
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        style={{ height: "400px" }}
      />
    </div>
  );
}
