import type { CSSProperties } from "react";
import styles from "./faro.module.css";

// Espiral de Vogel: composición determinista, sin círculos guía ni simulación.
// Se omiten las semillas que entrarían en el libro.
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const nodes = Array.from({ length: 80 }, (_, index) => {
  const angle = index * goldenAngle + .3;
  const radius = 164 * Math.sqrt((index + .5) / 80);
  return {
    id: String(index),
    x: Math.round((320 + radius * Math.cos(angle)) * 100) / 100,
    y: Math.round((211 + radius * Math.sin(angle)) * 100) / 100,
    r: index % 7 === 0 ? 3.5 : index % 2 === 0 ? 2.6 : 2,
  };
}).filter(point => point.y <= 276).slice(0, 60);

type Point = (typeof nodes)[number];
const cross = (a: Point, b: Point, c: Point) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
const candidates = nodes.flatMap((a, i) => nodes.slice(i + 1).map(b => ({ a, b, distance: Math.hypot(a.x - b.x, a.y - b.y) })))
  .filter(edge => edge.distance <= 60).sort((a, b) => a.distance - b.distance);
const degree = new Map<string, number>();
const networkEdges: typeof candidates = [];
for (const edge of candidates) {
  if ((degree.get(edge.a.id) ?? 0) >= 4 || (degree.get(edge.b.id) ?? 0) >= 4) continue;
  if (networkEdges.some(other => cross(edge.a, edge.b, other.a) * cross(edge.a, edge.b, other.b) < 0
    && cross(other.a, other.b, edge.a) * cross(other.a, other.b, edge.b) < 0)) continue;
  networkEdges.push(edge);
  degree.set(edge.a.id, (degree.get(edge.a.id) ?? 0) + 1);
  degree.set(edge.b.id, (degree.get(edge.b.id) ?? 0) + 1);
}
const connections = networkEdges.map(({ a, b }) => ({ id: `${a.id}-${b.id}`, d: `M${a.x} ${a.y}L${b.x} ${b.y}` }));
const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

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
      <svg viewBox="0 0 640 690" fill="none" role="img"
        aria-label="FARO, Fuente Abierta de Regulación y Ordenamiento. Un faro ilumina una red de normas sobre un libro abierto, con un escudo y un candado."
        className={styles.illustration}>
        <defs>
          <linearGradient id="faro-ring" x1="130" y1="300" x2="490" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a8bed5" /><stop offset=".35" stopColor="#32658c" /><stop offset=".66" stopColor="#d6e6f3" /><stop offset="1" stopColor="#8c9fbf" />
          </linearGradient>
          <linearGradient id="faro-tower" x1="255" y1="260" x2="381" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#03273f" /><stop offset=".51" stopColor="#0b4267" /><stop offset=".515" stopColor="#f4f8fc" /><stop offset=".8" stopColor="#d5e1ec" /><stop offset="1" stopColor="#587d9c" />
          </linearGradient>
          <linearGradient id="faro-roof" x1="277" y1="88" x2="361" y2="118" gradientUnits="userSpaceOnUse">
            <stop stopColor="#03283f" /><stop offset=".48" stopColor="#164f76" /><stop offset=".72" stopColor="#7197b2" /><stop offset="1" stopColor="#082f4b" />
          </linearGradient>
          <linearGradient id="faro-navy" x1="140" y1="350" x2="510" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#052b46" /><stop offset=".52" stopColor="#104c77" /><stop offset="1" stopColor="#03253f" />
          </linearGradient>
          <linearGradient id="faro-paper" x1="320" y1="395" x2="320" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fbff" /><stop offset=".55" stopColor="#d4e0ec" /><stop offset="1" stopColor="#8ba7c7" />
          </linearGradient>
          <linearGradient id="faro-lamp" x1="0" y1="135" x2="0" y2="178" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dfa63e" /><stop offset=".5" stopColor="#ffe3a0" /><stop offset="1" stopColor="#fff9db" />
          </linearGradient>
          <linearGradient id="faro-beam" x1="349" y1="152" x2="638" y2="152" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e4aa3e" stopOpacity=".9" /><stop offset=".5" stopColor="#f2c66b" stopOpacity=".45" /><stop offset="1" stopColor="#ffe2a1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="faro-beam-core" x1="349" y1="152" x2="638" y2="152" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff8dc" /><stop offset="1" stopColor="#fff3c0" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="faro-glow"><stop stopColor="#fff0b6" stopOpacity=".9" /><stop offset="1" stopColor="#f8da90" stopOpacity="0" /></radialGradient>
          <clipPath id="faro-network-clip"><circle cx="320" cy="235" r="184" /></clipPath>
        </defs>

        {/* 1. Aro continuo; la torre y el libro ocultan las partes que quedan detrás. */}
        <g className={styles.brandRing}>
          <circle cx="320" cy="235" r="191"
            stroke="url(#faro-ring)" strokeWidth="7" pathLength="1" />
        </g>

        {/* 2. Red artística, contenida detrás de la torre. */}
        <g className={styles.constellation} clipPath="url(#faro-network-clip)">
          {connections.map((connection, i) => <path key={connection.id} d={connection.d}
            stroke="var(--logo-network)" strokeWidth=".8" strokeLinecap="round" className={styles.networkEdge} style={delay(-i * .47)} />)}
          {connections.filter((_, i) => i % 12 === 0).map((connection, i) => <path key={`pulse-${connection.id}`} d={connection.d}
            pathLength="1" stroke="var(--logo-signal)" strokeWidth="1.4" strokeLinecap="round" className={styles.networkSignal} style={delay(-i * 1.6)} />)}
          {nodes.map((node, i) => <circle key={node.id} cx={node.x} cy={node.y} r={node.r} fill="var(--logo-network)" className={styles.networkNode} style={delay(-i * .37)} />)}
        </g>

        {/* 3–4. Haz detrás de la linterna; torre y arquitectura estables. */}
        <g className={styles.beam}><g className={styles.beamSweep}>
          <path d="M349 152 638 69V246Z" fill="url(#faro-beam)" />
          <path d="M349 152 638 115V183Z" fill="url(#faro-beam-core)" />
          <path d="m349 152 289-5v11Z" fill="url(#faro-beam-core)" />
        </g></g>
        <circle className={styles.glow} cx="320" cy="153" r="48" fill="url(#faro-glow)" />
        <g className={styles.brandTower}>
          <path d="m274 194-20 138 66 66 66-66-20-138Z" fill="url(#faro-tower)" />
          <path d="M349 225q0-8 7-8t7 8l4 60-12-2Z" fill="#062d48" />
          <path d="M263 184q57-24 114 0v12q-57-17-114 0Z" fill="url(#faro-roof)" />
          <path d="M267 195q53-15 106 0l-4 7q-49-14-98 0Z" fill="#f0f5fa" />
          <path d="M278 171q42-18 84 0v13q-42-14-84 0Z" fill="#0b3552" />
          <path d="M286 123h68v49q-34-10-68 0Z" fill="#0b3552" />
          <g className={styles.lantern}>
            <path d="M292 133q4-5 8 0v32h-8Zm15-3q5-5 10 0v33h-10Zm18 0q5-5 10 0v33h-10Zm17 3q4-5 7 0v32h-7Z" fill="url(#faro-lamp)" />
            <path d="M303 132v31m18-34v33m17-30v31" stroke="#edf6ff" strokeWidth="3" />
          </g>
          <path d="M277 121q0-7 9-10c2-20 14-39 34-39s32 19 34 39q9 3 9 10v9q-43-15-86 0Z" fill="url(#faro-roof)" />
          <path d="M282 120q38-13 76 0" stroke="#f0f6fc" strokeWidth="4" />
          <path d="M309 75V64q11-7 22 0v11" fill="#0b3552" />
          <path d="M315 63V50q5-9 10 0v13" fill="url(#faro-roof)" />
          <circle cx="320" cy="44" r="7" fill="url(#faro-roof)" />
          <path d="M320 38V22" stroke="#062d48" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 5. Hojas superpuestas, de las más lejanas a la cubierta. */}
        <g className={styles.brandBook}>
          <path d="M320 398c-38-63-81-101-135-111l-22 18c68 9 116 43 157 93Zm0 0c38-63 81-101 135-111l22 18c-68 9-116 43-157 93Z" fill="url(#faro-paper)" />
          <path d="M320 409c-59-72-125-103-180-96l-24 24c87-8 146 23 204 72Zm0 0c59-72 125-103 180-96l24 24c-87-8-146 23-204 72Z" fill="url(#faro-roof)" stroke="var(--logo-paper-edge)" strokeWidth="5" />
          <path d="M320 420c-70-63-151-91-223-71l-32 45c97-36 188-12 240 32q15 13 30 0c52-44 143-68 240-32l-32-45c-72-20-153 8-223 71Z" fill="url(#faro-navy)" />
          <path d="M76 393c92-34 184-12 229 29q15 14 30 0c45-41 137-63 229-29M130 338c77-6 138 25 190 77 52-52 113-83 190-77" stroke="var(--logo-paper-edge)" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* 6. Escudo encajado entre las páginas. */}
        <g className={styles.brandShield}>
          <path d="M320 284q-17 13-37 17v28q3 31 37 58 34-27 37-58v-28q-20-4-37-17Z" fill="url(#faro-navy)" stroke="#f5f9ff" strokeWidth="4" />
          <rect x="306" y="326" width="28" height="25" rx="3" fill="#f7fbff" />
          <path d="M311 326v-7a9 9 0 0 1 18 0v7" stroke="#f7fbff" strokeWidth="4" />
          <path d="M320 335v8" stroke="#0a3654" strokeWidth="4" strokeLinecap="round" /><circle cx="320" cy="335" r="3.4" fill="#0a3654" />
        </g>

        {/* 7. Nombre y significado forman parte de la marca. */}
        <g className={styles.brandSignature}>
          <text x="320" y="585" textAnchor="middle" fill="var(--logo-wordmark)" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="170" textLength="580" lengthAdjust="spacing">FARO</text>
          <path d="M23 621h35m524 0h35" stroke="var(--gold)" strokeWidth="2" />
          <text x="320" y="628" textAnchor="middle" fill="var(--logo-wordmark)" fontFamily="Arial, sans-serif" fontSize="16" letterSpacing="4.1">FUENTE ABIERTA DE REGULACIÓN</text>
          <text x="320" y="658" textAnchor="middle" fill="var(--logo-wordmark)" fontFamily="Arial, sans-serif" fontSize="16" letterSpacing="6">Y ORDENAMIENTO</text>
        </g>
      </svg>
      <ul className={styles.brandPillars} aria-label="Pilares de FARO">
        <li><PillarIcon kind="security" /><span>Seguridad<br />de nivel estatal</span></li>
        <li><PillarIcon kind="servers" /><span>Alta<br />disponibilidad</span></li>
        <li><PillarIcon kind="document" /><span>Datos confiables<br />y actualizados</span></li>
        <li><PillarIcon kind="code" /><span>Software<br />de calidad</span></li>
      </ul>
    </div>
  );
}
