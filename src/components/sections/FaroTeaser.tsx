import type { Lang } from "@/i18n/config";

export default function FaroTeaser({ lang }: { lang: Lang }) {
  const es = lang === "es";
  return (
    <section
      id="faro"
      className="container-page py-12"
      aria-labelledby="faro-presentacion"
    >
      <div className="relative overflow-hidden rounded-xl border border-[#345267] bg-[#0c263b] px-7 py-12 sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 right-0 size-80 rounded-full border border-[#bc965333] shadow-[0_0_0_50px_#bc96530a,0_0_0_100px_#bc965305]"
        />
        <div className="relative flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="mb-5 font-mono text-xs tracking-[.2em] text-[#edc87f]">
              ✦ FARO
            </p>
            <h2
              id="faro-presentacion"
              className="text-3xl leading-tight font-medium tracking-tight text-[#f2f5f5] sm:text-4xl"
            >
              {es
                ? "La normativa municipal, en claro."
                : "Municipal legislation, made clear."}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#bbceda]">
              {es
                ? "Una plataforma para organizar, consultar y conectar las normas de una ciudad. Conocé la propuesta para municipios."
                : "A platform to organize, explore and connect a city’s legislation. Discover the proposal for municipal governments."}
            </p>
          </div>
          <a
            href="/faro"
            className="inline-flex min-h-12 items-center gap-6 rounded-md bg-[#edc87f] px-5 py-3 text-sm font-semibold text-[#0c263b] transition-colors hover:bg-[#ffdfa2]"
          >
            {es ? "Conocer FARO" : "Explore FARO (Spanish)"}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
