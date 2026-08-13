import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgProps = {
  kicker: string;
  title: string;
  subtitle: string;
  footerLeft: string;
  footerRight: string;
};

/**
 * Imagen de compartido generada en el edge, para no mantener PNG a mano.
 *
 * Nota de satori: cualquier `div` con más de un hijo necesita `display: flex`
 * explícito, y no soporta shorthand de `gap` en todos los ejes. Por eso el
 * markup es más verboso de lo que sería en el sitio.
 */
export function renderOgImage({
  kicker,
  title,
  subtitle,
  footerLeft,
  footerRight,
}: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#ffb224",
            }}
          />
          <div
            style={{
              color: "#6b6b75",
              fontSize: "25px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f4f4f5",
              fontSize: title.length > 34 ? "68px" : "88px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "38px",
              marginTop: "18px",
              letterSpacing: "-0.02em",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #1e1e24",
            paddingTop: "34px",
          }}
        >
          <div style={{ color: "#6b6b75", fontSize: "28px" }}>{footerLeft}</div>
          <div style={{ color: "#ffb224", fontSize: "28px" }}>{footerRight}</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
