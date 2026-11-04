import LighthouseMark from "./LighthouseMark";
import styles from "./faro.module.css";


function PillarIcon({ kind }: { kind: "security" | "servers" | "document" | "code" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "security" && <><path d="M24 4c7 5 13 6 17 7v12c0 10-7 17-17 21C14 40 7 33 7 23V11c4-1 10-2 17-7Z" /><rect x="18" y="22" width="12" height="11" rx="2" /><path d="M20 22v-4a4 4 0 0 1 8 0v4m-4 5v2" /></>}
      {kind === "servers" && <>{[7, 19, 31].map(y => <g key={y}><rect x="5" y={y} width="38" height="10" rx="3" /><path d={`M11 ${y + 5}h1m6 0h1m13 0h5`} /></g>)}</>}
      {kind === "document" && <><path d="M12 5h17l9 9v29H12a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm17 0v10h9M16 23h15m-15 6h15m-15 6h9" /></>}
      {kind === "code" && <path d="m14 11-12 13 12 13m20-26 12 13-12 13M29 6 19 42" />}
    </svg>
  );
}

/** Marca completa en capas; el movimiento continuo se concentra en luz y red. */
export default function Lighthouse() {
  return (
    <div className={styles.lighthouse}>
      <LighthouseMark classes={styles} />
      <ul className={styles.brandPillars} aria-label="Pilares de FARO">
        <li><PillarIcon kind="security" /><span>Seguridad<br />de nivel estatal</span></li>
        <li><PillarIcon kind="servers" /><span>Alta<br />disponibilidad</span></li>
        <li><PillarIcon kind="document" /><span>Datos confiables<br />y actualizados</span></li>
        <li><PillarIcon kind="code" /><span>Software<br />de calidad</span></li>
      </ul>
    </div>
  );
}
