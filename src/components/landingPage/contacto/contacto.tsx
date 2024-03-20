import linkedInIcon from "/public/icons/linkedin.svg";
import mailIcon from "/public/icons/gmail.svg";
import githubIcon from "/public/icons/github.svg";
import Image from "next/image";

type ContactInfo = {
  name: string;
  url: string;
  icon: any;
};

export default function Contacto() {
  const contactos: ContactInfo[] = [
    {
      name: "Ariel Eitner on LinkedIn",
      url: "https://www.linkedin.com/in/ariel-eitner-414171225/",
      icon: linkedInIcon,
    },
    {
      name: "ariel.10.e@hotmail.com",
      url: "mailto:ariel.10.e@hotmail.com?subject=Hola Ariel, Vamos a crear algo increíble juntos! 🚀&body=",
      icon: mailIcon,
    },
    {
      name: "Ariel-Eitner on GitHub",
      url: "https://github.com/Ariel-Eitner/",
      icon: githubIcon,
    },
  ];
  return (
    <div id="Contacto" className="bg-gray-700 h-auto py-12">
      <h2 className="text-center mb-12 text-2xl font-bold">Contacto</h2>
      <ul className="flex flex-col md:flex-row justify-center items-center list-none">
        {contactos.map((contacto, index) => (
          <li key={index} className="mx-2 my-2 md:mx-5">
            <a
              href={contacto.url}
              className="flex items-center no-underline text-current"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={contacto.icon}
                alt={contacto.name}
                width={40}
                height={40}
              />
              <p className="ml-2">{contacto.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
