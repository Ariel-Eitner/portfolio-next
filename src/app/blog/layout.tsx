import LastEntries from "@/components/lastEntries/lastEntries";

import Link from "next/link";
import React from "react";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-700 text-white mt-14">
      <div className="px-4 sm:px-6 lg:px-8 font-sans mt-14 pt-5">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Bienvenidos a Mi Blog sobre Programación y Tecnología
          </h1>
          <p className="mt-3 text-lg">
            Explorando el mundo de la tecnología, programación y terminología de
            software.
          </p>
        </header>

        <div className="flex flex-col md:flex-row">
          <main className="md:w-2/3">{children}</main>

          <aside className="md:w-1/3 md:pl-6">
            <LastEntries />

            <section>
              <h2 className="text-3xl font-semibold mb-5 mt-5">Categorías</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Programación
                </span>
                <span className="bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Tecnología
                </span>
                <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Software
                </span>
              </div>
            </section>
            <Link
              href="/blog/new-post"
              className=" mt-5 inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Nuevo post
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
