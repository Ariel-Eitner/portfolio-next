"use client";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const { user, error, isLoading } = useUser();

  return (
    <nav className="fixed top-0 w-full z-30 bg-black shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="text-lg font-semibold text-white">
            <Link href="/#home">Ariel Eitner</Link>
          </div>
          {/* Botón del menú para dispositivos móviles */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    !isMenuOpen
                      ? "M4 6h16M4 12h16m-7 6h7"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
          {/* Primer grupo de enlaces, visible solo en pantallas grandes */}
          <div className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/#Inicio"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Inicio
            </Link>
            <Link
              href="/#About"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Acerca de
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              href="/#Services"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Servicios
            </Link>
            <Link
              href="/#Portfolio"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Portafolio
            </Link>
            <Link
              href="/#Contacto"
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Contacto
            </Link>
            <Link
              href="mailto:ariel.10.e@hotmail.com?subject=Hola Ariel, Vamos a crear algo increíble juntos! 🚀&body="
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Contrátame
            </Link>
            {user ? (
              <>
                <span>{user.name}</span>
                {user.picture && (
                  <Image
                    src={user.picture || ""}
                    alt="User Image"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                )}
                <a
                  href="/api/auth/logout"
                  className="text-white hover:text-gray-700 cursor-pointer"
                >
                  Logout
                </a>
              </>
            ) : (
              <>
                <a
                  href="/api/auth/login"
                  className="text-white hover:text-gray-700 cursor-pointer"
                >
                  Login
                </a>
              </>
            )}
          </div>
        </div>
        {/* Segundo grupo de enlaces, visible solo en dispositivos móviles */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col space-y-4 md:hidden`}
        >
          <Link
            href="/#Inicio"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Inicio
          </Link>
          <Link
            href="/#About"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Acerca de
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/#Services"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Servicios
          </Link>
          <Link
            href="/#Portfolio"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Portafolio
          </Link>
          <Link
            href="/#Contacto"
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Contacto
          </Link>
          <Link
            href="mailto:ariel.10.e@hotmail.com?subject=Hola Ariel, Vamos a crear algo increíble juntos! 🚀&body="
            className="text-white hover:text-gray-700 cursor-pointer"
          >
            Contrátame
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
