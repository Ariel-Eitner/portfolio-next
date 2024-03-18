import Inicio from "@/components/landingPage/inicio/inicio";
import About from "@/components/landingPage/about/about";
import {
  backendDependencies,
  frontendDependencies,
  backendDevDependencies,
} from "../data/dependencies";
import Services from "@/components/landingPage/servicios/servicios";
import Portfolio from "@/components/landingPage/portfolio/portfolio";
import Contacto from "@/components/landingPage/contacto/contacto";

export default function Home() {
  return (
    <>
      <Inicio />
      <About
        backendDependencies={backendDependencies}
        backendDevDependencies={backendDevDependencies}
        frontendDependencies={frontendDependencies}
      />
      <Services />
      <Portfolio />
      <Contacto />
    </>
  );
}
