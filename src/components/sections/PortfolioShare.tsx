"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { portfolioShareUrl, shareCopy } from "@/data/share";
import type { Lang } from "@/i18n/config";

const button = "inline-flex items-center justify-center rounded-full border border-hairline-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-raised";

export default function PortfolioShare({ lang }: { lang: Lang }) {
  const copy = shareCopy[lang];
  const url = portfolioShareUrl(lang);
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!expanded) return;
    const element = dialog.current;
    const previous = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previous;
    };
  }, [expanded]);

  async function share() {
    setStatus("");
    try {
      if (navigator.share) {
        await navigator.share({ title: `${profile.name} — Portfolio`, text: copy.intro, url });
      } else {
        await navigator.clipboard.writeText(url);
        setStatus(copy.saved);
      }
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) setStatus(copy.failed);
    }
  }

  function qr(size: number) {
    return <Image src={`/compartir/${lang}.svg`} alt={copy.alt} width={size} height={size} unoptimized className="h-auto w-full rounded-xl bg-white" />;
  }

  return (
    <>
      <div className="card-hairline mt-10 grid items-center gap-8 rounded-2xl p-6 sm:p-8 md:grid-cols-[220px_1fr] md:gap-10">
        <button type="button" onClick={() => setExpanded(true)} aria-label={copy.enlarge} aria-haspopup="dialog" className="mx-auto w-full max-w-64 rounded-xl md:max-w-none">
          {qr(256)}
        </button>
        <div>
          <p className="eyebrow text-accent">{copy.eyebrow}</p>
          <h3 className="mt-3 text-h3 font-semibold text-ink">{copy.title}</h3>
          <p className="mt-3 text-ink-muted">{copy.intro}</p>
          <a href={url} className="mt-3 inline-block break-all font-mono text-sm text-accent underline-offset-4 hover:underline">{url.replace("https://", "").replace(/\/$/, "")}</a>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent/90" onClick={() => setExpanded(true)} aria-haspopup="dialog">{copy.enlarge}</button>
            <a className={button} href={`/compartir/${lang}-tarjeta.png`} download={`ariel-eitner-tarjeta-${lang}.png`}>{copy.download}</a>
            <button type="button" className={button} onClick={share}>{copy.share}</button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-ink-muted">
            <a className="underline underline-offset-4 hover:text-ink" href={`/compartir/${lang}.svg`} download={`ariel-eitner-qr-${lang}.svg`}>{copy.svg}</a>
            <a className="underline underline-offset-4 hover:text-ink" href={`/compartir/${lang}.png`} download={`ariel-eitner-qr-${lang}.png`}>{copy.png}</a>
          </div>
          <p role="status" className="mt-3 text-sm text-ink-muted">{status}</p>
        </div>
      </div>
      <dialog ref={dialog} aria-labelledby="portfolio-qr-title" onCancel={() => setExpanded(false)} onClose={() => setExpanded(false)} onClick={event => { if (event.target === event.currentTarget) setExpanded(false); }} className="fixed inset-0 m-auto max-h-[100dvh] w-full max-w-lg overflow-y-auto rounded-2xl border border-hairline-strong bg-canvas p-5 text-center text-ink backdrop:bg-black/85 sm:p-8">
        <button type="button" autoFocus onClick={() => setExpanded(false)} className={`${button} mb-5`}>{copy.close} <span aria-hidden="true" className="ml-2">×</span></button>
        <h2 id="portfolio-qr-title" className="text-2xl font-semibold">{profile.name}</h2>
        <p className="mt-2 text-sm text-ink-muted">{copy.intro}</p>
        <div className="mx-auto mt-5 w-full max-w-[min(80vw,45dvh,360px)]">{qr(400)}</div>
        <a href={url} className="mt-4 inline-block break-all font-mono text-sm text-accent">{url.replace("https://", "").replace(/\/$/, "")}</a>
        <p className="mt-3 text-xs text-ink-muted">{copy.hint}</p>
      </dialog>
    </>
  );
}
