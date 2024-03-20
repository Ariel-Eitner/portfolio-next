import Image from "next/image";
import fotoPerfil from "/public/images/7.png";

export default function Inicio() {
  return (
    <>
      <div
        id="inicio"
        className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center text-center relative"
        style={{ backgroundImage: `url('/images/6.jpeg')` }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-5"></div>
        <div className="inicio-content relative z-7">
          <div className="perfil-imagen mb-4 inline-block w-38 h-38 rounded-full overflow-hidden relative z-1">
            <Image
              src={fotoPerfil}
              alt="Ariel Eitner"
              width={150}
              height={150}
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-white text-4xl mb-2">Ariel Eitner</h1>
          <p className="text-white text-lg mb-4">
            Full-stack Software, Web y App Developer
          </p>
        </div>
      </div>
    </>
  );
}
