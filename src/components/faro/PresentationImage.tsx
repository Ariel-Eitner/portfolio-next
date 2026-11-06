"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import styles from "./presentation.module.css";

export default function PresentationImage({ src, alt, caption, mobile = false, priority = false }: {
  src: string; alt: string; caption: string; mobile?: boolean; priority?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useId();
  return (
    <figure className={`${styles.figure} ${mobile ? styles.mobileFigure : ""}`}>
      <button className={styles.imageButton} type="button" onClick={() => dialog.current?.showModal()} aria-label={`Ampliar: ${alt}`}>
        <div className={styles.imageChrome} aria-hidden="true"><span /><span /><span /><i>{mobile ? "VISTA MÓVIL" : "CAPTURA DE LA APLICACIÓN"}</i></div>
        <Image src={src} alt={alt} width={mobile ? 860 : 1920} height={mobile ? 1864 : 1333} sizes={mobile ? "(max-width: 700px) 75vw, 300px" : "(max-width: 900px) 92vw, 70vw"} priority={priority} />
        <span className={styles.expandLabel}>Ampliar imagen <span aria-hidden="true">↗</span></span>
      </button>
      <figcaption>{caption}</figcaption>
      <dialog ref={dialog} className={styles.imageDialog} aria-labelledby={title} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className={styles.dialogToolbar}><p id={title}>{alt}</p><button type="button" onClick={() => dialog.current?.close()}>Cerrar <span aria-hidden="true">×</span></button></div>
        <Image src={src} alt={alt} width={mobile ? 860 : 1920} height={mobile ? 1864 : 1333} sizes="95vw" />
      </dialog>
    </figure>
  );
}
