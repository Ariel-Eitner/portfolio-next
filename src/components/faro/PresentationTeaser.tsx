import Link from "next/link";
import PresentationImage from "./PresentationImage";
import styles from "./presentation.module.css";

export default function PresentationTeaser() {
  return (
    <section className={styles.teaser} aria-labelledby="recorrido-titulo">
      <div className={styles.teaserCopy}>
        <p className={styles.kicker}>FARO, PASO A PASO</p>
        <h2 id="recorrido-titulo">De una pregunta<br /><em>a la norma que importa.</em></h2>
        <p>Un recorrido por la plataforma con la Carta Orgánica de Catamarca: encontrarla, reconocer su vigencia, leer sus artículos y explorar sus conexiones.</p>
        <ol className={styles.teaserSteps}><li><span>01</span> Encontrar</li><li><span>02</span> Comprender</li><li><span>03</span> Conectar</li></ol>
        <Link className={styles.solidLink} href="/faro/como-funciona">Ver cómo funciona <span aria-hidden="true">→</span></Link>
        <a className={styles.inlineLink} href="#presentacion">También disponible en PDF <span aria-hidden="true">↓</span></a>
      </div>
      <PresentationImage src="/images/faro/recorrido/cat-ficha.webp" alt="Ficha de la Carta Orgánica con vigencia y categoría destacadas" caption="Información para orientarse antes de comenzar la lectura. Ejemplo municipal de Catamarca." />
    </section>
  );
}
