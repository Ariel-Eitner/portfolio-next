import Link from "next/link";

const MainNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-30 bg-black shadow-md transition-colors duration-300 ">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex justify-between items-center py-3">
          <div className="text-lg font-semibold text-white">
            <Link href="/#home">Ariel Eitner</Link>
          </div>
          <div className="hidden md:flex space-x-4">
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
              href={`mailto:ariel.10.e@hotmail.com?subject=Hola Ariel, Vamos a crear algo increíble juntos! 🚀&body=`}
              className="text-white hover:text-gray-700 cursor-pointer"
            >
              Contrátame
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
