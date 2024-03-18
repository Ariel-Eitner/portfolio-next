"use client";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../styles/custom-quill.css";

// Importa React Quill de manera dinámica para evitar problemas de SSR

export default function NewPost() {
  // Almacenar el contenido del editor en el estado
  const [editorContent, setEditorContent] = React.useState("");

  // Configuración para el editor React Quill
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
