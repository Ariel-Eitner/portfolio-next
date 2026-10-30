import styles from "./faro.module.css";

/** El haz se estrecha al girar entre ambos lados; la torre permanece inmóvil. */
export default function Lighthouse() {
  return (
    <div className={styles.lighthouse}>
      <svg
        viewBox="0 0 600 620"
        fill="none"
        aria-hidden="true"
        className={styles.illustration}
      >
        <defs>
          <linearGradient
            id="faro-tower"
            x1="230"
            y1="210"
            x2="345"
            y2="440"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#225776" />
            <stop offset=".5" stopColor="#0b3049" />
            <stop offset=".505" stopColor="#edf2f3" />
            <stop offset="1" stopColor="#a6becb" />
          </linearGradient>
          <linearGradient
            id="faro-roof"
            x1="236"
            y1="140"
            x2="318"
            y2="184"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#507f9b" />
            <stop offset=".6" stopColor="#0c3550" />
            <stop offset="1" stopColor="#062238" />
          </linearGradient>
          <linearGradient
            id="faro-beam"
            x1="282"
            y1="213"
            x2="600"
            y2="213"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#efb442" stopOpacity=".84" />
            <stop offset=".48" stopColor="#efc15e" stopOpacity=".42" />
            <stop offset="1" stopColor="#f6d587" stopOpacity=".025" />
          </linearGradient>
          <linearGradient
            id="faro-beam-core"
            x1="282"
            y1="213"
            x2="600"
            y2="213"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff3b8" stopOpacity=".9" />
            <stop offset=".5" stopColor="#ffdc84" stopOpacity=".34" />
            <stop offset="1" stopColor="#ffe2a1" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="faro-glow">
            <stop stopColor="#fff0b6" stopOpacity=".9" />
            <stop offset=".3" stopColor="#ffd57b" stopOpacity=".5" />
            <stop offset="1" stopColor="#f8da90" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="faro-page" x1="140" y1="440" x2="285" y2="520">
            <stop stopColor="#a5bdcb" />
            <stop offset="1" stopColor="#f9fbfc" />
          </linearGradient>
        </defs>
        <g className={styles.constellation}>
          <circle cx="282" cy="320" r="202" stroke="#bed0d9" strokeWidth="1" />
          <circle
            cx="282"
            cy="320"
            r="162"
            stroke="#d7e2e7"
            strokeDasharray="3 8"
          />
          <path d="M80 320h28m348 0h28M282 118v25m0 354v25" stroke="#aac1cf" />
          <path
            d="M153 330 192 264 254 298 350 261 398 343 343 395 219 387Z"
            stroke="#b7d0dd"
          />
          {[
            ["153", "330"],
            ["192", "264"],
            ["254", "298"],
            ["350", "261"],
            ["398", "343"],
            ["343", "395"],
            ["219", "387"],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="5" fill="#98bed4" />
          ))}
        </g>
        <g className={styles.beam}>
          <g className={styles.beamSweep}>
            <path d="M282 213 600 126V300Z" fill="url(#faro-beam)" />
            <path d="M282 213 600 175V252Z" fill="url(#faro-beam-core)" />
          </g>
        </g>
        <circle
          className={styles.glow}
          cx="282"
          cy="213"
          r="68"
          fill="url(#faro-glow)"
        />
        <path d="m247 263-30 187 65 47 71-47-34-187Z" fill="url(#faro-tower)" />
        <path d="M304 311c0-10 10-10 11 0l5 70-11 3Z" fill="#0b3049" />
        <path d="M236 244h92v25h-92z" fill="#0b3049" />
        <path d="m227 242 55-15 56 15v12l-56 15-55-15Z" fill="#174967" />
        <path
          d="m228 243 54 12 55-12m-100 18 45 10 45-10"
          stroke="#e4eef2"
          strokeWidth="4"
        />
        <path d="M246 185h72v51h-72z" fill="#163d55" />
        <path
          d="M254 193q7-6 13 0v39h-13zm23-3q7-6 13 0v45h-13zm23 3q6-6 11 0v39h-11z"
          fill="#f6cd70"
          className={styles.lantern}
        />
        <path
          d="M254 196v31m25-32v35m23-34v31"
          stroke="#fff3cd"
          strokeWidth="4"
        />
        <path
          d="M236 181c9-8 12-14 13-23 4-18 15-30 33-30s30 12 34 30c2 9 5 15 12 23v8h-92Z"
          fill="url(#faro-roof)"
        />
        <path
          d="M276 126v-15q6-10 12 0v15m-6-20V86"
          stroke="#103b56"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M242 181q40-13 80 0" stroke="#e9f1f4" strokeWidth="4" />
        <path
          d="M115 464c66-37 119-20 167 24 47-44 101-61 167-24l21 37c-81-22-130-8-188 27-56-35-105-49-188-27Z"
          fill="#0b3551"
        />
        <path
          d="M135 435c51-14 107 3 147 53-45-29-94-42-166-25Z"
          fill="url(#faro-page)"
        />
        <path
          d="M429 435c-51-14-107 3-147 53 45-29 94-42 166-25Z"
          fill="url(#faro-page)"
        />
        <path
          d="M109 478c65-22 124-6 173 29 52-35 109-51 174-29M282 489v25"
          stroke="#f9fbfc"
          strokeWidth="5"
        />
        <path
          d="m257 408 25-13 25 13-4 36-21 25-21-25Z"
          fill="#103f5d"
          stroke="#f5f8f8"
          strokeWidth="3"
        />
        <rect x="274" y="427" width="16" height="15" rx="2" fill="#f4f7f7" />
        <path
          d="M277 427v-6a5 5 0 0 1 10 0v6"
          stroke="#f4f7f7"
          strokeWidth="3"
        />
        <path d="M106 552h351" stroke="#c3d1d8" />
        <circle cx="282" cy="552" r="3" fill="#c89134" />
      </svg>
      <div className={styles.visualFooter}>
        <span>Una guía entre tantas normas.</span>
      </div>
    </div>
  );
}
