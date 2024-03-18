// components/Portfolio.tsx
import Image from "next/image";
import React from "react";
import project1Image1 from "/public/projects/scriptAI1.png";
import project1Image2 from "/public/projects/saludOnline1.png";

const projects = [
  {
    src: project1Image1,
    alt: "Proyecto 1",
    title: "ScriptAI",
    description:
      "Editor de texto con inteligencia artificial para creación de guiones de cine",
    link: "https://scriptai-client.netlify.app/",
  },
  {
    src: project1Image2,
    alt: "Proyecto 2",
    title: "Salud Online",
    description:
      "Salud online es una pagina donde psicólogos y pacientes pueden conectarse a través de todo el mundo. Aún en construcción",
    link: "https://salud-online-client.netlify.app/",
  },
  // Añade más proyectos según sea necesario
];

export default function Portfolio() {
  return (
    <div id="Portfolio" className="py-12 px-4 bg-gray-700">
      <h2 className="text-center text-3xl font-semibold mb-10">Portafolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg bg-white"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.src}
                alt={project.alt}
                width={500}
                height={300}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
