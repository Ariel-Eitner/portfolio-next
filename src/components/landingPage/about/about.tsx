export default function About({
  backendDependencies,
  frontendDependencies,
  backendDevDependencies,
}: any) {
  return (
    <div id="About">
      <div className="py-16 px-8 bg-gray-700">
        <h2 className="text-center mb-12 text-4xl">Acerca de mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-500 p-8 rounded-lg shadow-md">
            <h2 className="text-center text-3xl mb-5">¿Quién soy?</h2>
            <p>
              Soy un entusiasta de la tecnología y la programación con una
              sólida base en electrónica y un amor por los sistemas robustos y
              seguros. Desde que comencé mi viaje en el mundo del desarrollo
              durante la pandemia, he encontrado una verdadera pasión en el
              tratamiento y análisis de datos, buscando siempre la elegancia y
              eficiencia en las soluciones que desarrollo.
            </p>
            <p>
              Además de ser un programador multilingüe, hablando tanto inglés
              como español, mi amor por la música impregna mi forma de pensar,
              agregando una capa de creatividad y ritmo a mi lógica de
              programación. Lo que comenzó como un pasatiempo en electrónica se
              ha transformado en una carrera dedicada a la creación de software
              de alta calidad que no solo cumple su función, sino que también
              protege y respeta la privacidad y seguridad de los usuarios.
            </p>
            <p>
              Creo firmemente que un buen sistema no solo está definido por su
              funcionalidad, sino también por su capacidad para resistir el paso
              del tiempo y adaptarse a las cambiantes necesidades del mercado.
              Con cada línea de código, busco aportar claridad, eficiencia y una
              sólida arquitectura que se alinea con los estándares modernos de
              la industria.
            </p>
          </div>

          <div className="bg-gray-500 p-8 rounded-lg shadow-lg space-y-6">
            <div>
              <h3 className="text-2xl text-white font-bold">Back-End</h3>
              <div className="flex flex-wrap md:flex-nowrap justify-between mt-4">
                <div className="w-full md:w-1/2 md:pr-4">
                  <h4 className="text-xl text-white font-semibold">
                    Base de Datos
                  </h4>
                  <ul className="list-disc pl-5 text-white">
                    {backendDependencies.database.map((lib: any) => (
                      <li key={lib} className="mt-1">
                        {lib}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
                  <h4 className="text-xl text-white font-semibold">
                    Frameworks
                  </h4>
                  <ul className="list-disc pl-5 text-white">
                    {backendDependencies.frameworks.map((lib: any) => (
                      <li key={lib} className="mt-1">
                        {lib}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Repitiendo la estructura para Seguridad y Utilidades */}
                <div className="w-full md:w-1/2 md:pr-4 mt-4 md:mt-0">
                  <h4 className="text-xl text-white font-semibold">
                    Seguridad
                  </h4>
                  <ul className="list-disc pl-5 text-white">
                    {backendDependencies.security.map((lib: any) => (
                      <li key={lib} className="mt-1">
                        {lib}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
                  <h4 className="text-xl text-white font-semibold">
                    Utilidades
                  </h4>
                  <ul className="list-disc pl-5 text-white">
                    {backendDependencies.utilities.map((lib: any) => (
                      <li key={lib} className="mt-1">
                        {lib}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl text-white font-semibold">Testing</h4>
                <ul className="list-disc pl-5 text-white">
                  {backendDevDependencies.testing.map((lib: any) => (
                    <li key={lib} className="mt-1">
                      {lib}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white font-bold">Front-End</h3>
              <div className="mt-4">
                <h4 className="text-xl text-white font-semibold">
                  Frameworks y Librerías
                </h4>
                <ul className="list-disc pl-5 text-white">
                  {frontendDependencies.frameworksAndLibraries.map(
                    (lib: any) => (
                      <li key={lib} className="mt-1">
                        {lib}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-xl text-white font-semibold">
                  Herramientas de Desarrollo
                </h4>
                <ul className="list-disc pl-5 text-white">
                  {frontendDependencies.devTools.map((tool: any) => (
                    <li key={tool} className="mt-1">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
