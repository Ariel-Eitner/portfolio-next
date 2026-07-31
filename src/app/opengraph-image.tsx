import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

/** Imagen de compartido generada en el edge; evita mantener un PNG a mano. */
export default function OpengraphImage() {
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
          padding: "80px",
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
              fontSize: "26px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {profile.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f4f4f5",
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              color: "#a1a1aa",
              fontSize: "42px",
              marginTop: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #1e1e24",
            paddingTop: "36px",
          }}
        >
          <div style={{ color: "#6b6b75", fontSize: "30px" }}>
            {profile.tagline}
          </div>
          {/* Un único hijo de texto: satori exige display:flex explícito
              en cualquier div con más de un nodo hijo. */}
          <div style={{ color: "#ffb224", fontSize: "30px" }}>
            {`${profile.yearsOfExperience} años`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
