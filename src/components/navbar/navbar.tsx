"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const MainNavbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 ${
        colorChange ? "bg-blue-300" : "bg-black"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex justify-between items-center py-3">
          <div className="text-lg font-semibold">
            <Link href="/#home">
              <span
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                }`}
              >
                Ariel Eitner
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/#Inicio">
              <span
                onClick={() => scrollToSection("#Inicio")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Inicio
              </span>
            </Link>
            <Link href="/#About">
              <span
                onClick={() => scrollToSection("#About")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Acerca de
              </span>
            </Link>
            <Link href="/blog">
              <span
                // onClick={() => scrollToSection("#About")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Blog
              </span>
            </Link>
            <Link href="/#Services">
              <span
                onClick={() => scrollToSection("#Services")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Servicios
              </span>
            </Link>
            <Link href="/#Portfolio">
              <span
                onClick={() => scrollToSection("#Portfolio")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Portafolio
              </span>
            </Link>
            <Link href="/#Contacto">
              <span
                onClick={() => scrollToSection("#Contacto")}
                className={`cursor-pointer ${
                  colorChange ? "text-black" : "text-white"
                } hover:text-gray-700`}
              >
                Contacto
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
