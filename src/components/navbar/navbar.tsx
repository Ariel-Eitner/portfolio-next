import Link from "next/link";

const MainNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10 bg-black shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex justify-between items-center py-3">
          <div className="text-lg font-semibold">
            {/* Modificado para quitar <a> y aplicar clases directamente a Link */}
            <Link href="/#home">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Ariel Eitner
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {/* Modificado para cada Link */}
            <Link href="/#Inicio">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Inicio
              </span>
            </Link>
            <Link href="/#About">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Acerca de
              </span>
            </Link>
            <Link href="/blog">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Blog
              </span>
            </Link>
            <Link href="/#Services">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Servicios
              </span>
            </Link>
            <Link href="/#Portfolio">
              <span className="cursor-pointer text-white hover:text-gray-700">
                Portafolio
              </span>
            </Link>
            <Link href="/#Contacto">
              <span className="cursor-pointer text-white hover:text-gray-700">
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
