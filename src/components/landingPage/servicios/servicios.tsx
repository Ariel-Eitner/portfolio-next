import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import icon1 from "/public/1.png";
import icon2 from "/public/2.png";
import icon3 from "/public/3.png";
import icon4 from "/public/4.png";
import icon6 from "/public/6.png";
import icon7 from "/public/7.png";

interface Servicio {
  id: number;
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function Services() {
  const servicios: Servicio[] = [
    {
      id: 1,
      icon: icon1,
      title: "Desarrollo Responsive",
      description:
        "Tu sitio se mostrará correctamente en cualquier dispositivo, incluyendo ordenadores de escritorio, tablets y teléfonos móviles.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Diseño Creativo",
      description:
        "Un diseño web atractivo te ayuda a mantener a tus visitantes en tu sitio, que es la cara digital de tu negocio.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Desarrollo Web",
      description:
        "Conozco la importancia del diseño web y puedo ayudarte a crear un sitio que amarás.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Integración con Redes Sociales",
      description:
        "Hay muchas plataformas sociales ahí fuera, y deberías promocionar tu presencia en ellas en tu sitio web.",
    },
    {
      id: 5,
      icon: icon6,
      title: "Rendimiento",
      description:
        "Retener a los usuarios es crucial para mejorar las conversiones. Sitios de alto rendimiento involucran y retienen a los usuarios.",
    },
    {
      id: 6,
      icon: icon7,
      title: "SEO",
      description:
        "Optimizaré tu sitio con una estrategia inteligente de Optimización de Motores de Búsqueda para generar clientes potenciales.",
    },
  ];

  return (
    <div id="Services" className="py-16 bg-gray-700 text-center">
      <h2 className="text-4xl mb-8">Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        {servicios.map((servicio) => (
          <div
            className="service-item p-4 rounded-lg bg-gray-500"
            key={servicio.id}
          >
            <Image
              src={servicio.icon}
              alt=""
              className="mx-auto"
              width={60}
              height={60}
            />
            <h3 className="text-xl my-2">{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
