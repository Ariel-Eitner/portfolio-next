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
      url: "mailto:ariel.10.e@hotmail.com",
      icon: mailIcon,
    },
    {
      name: "Ariel-Eitner on GitHub",
      url: "https://github.com/Ariel-Eitner/",
      icon: githubIcon,
    },
  ];
  return (
    <div id="Contacto" className="bg-gray-700 h-dvh">
      <h2 className="text-center  mb-12 text-2xl font-bold">Contacto</h2>
      <ul className="flex justify-center items-center list-none">
        {contactos.map((contacto, index) => (
          <li key={index} className="mx-5">
            <a
              href={contacto.url}
              className="flex items-center no-underline text-current"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={contacto.icon} alt={contacto.name} />
              <p className="ml-2">{contacto.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
