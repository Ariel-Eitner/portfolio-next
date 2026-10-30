import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Tarjetas autónomas: sin descargas de tipografías ni llamadas a servicios externos. */
export async function faroSocialImage(height: 600 | 630) {
  const mark = await readFile(
    join(process.cwd(), "public/images/faro/faro-mark.png"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          color: "#e7f0f4",
          backgroundColor: "#071927",
          backgroundImage: "linear-gradient(120deg, #102f43 0%, #071927 65%)",
          padding: "32px 48px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", flex: 1, gap: 36 }}
        >
          <div
            style={{
              display: "flex",
              width: 455,
              height: 455,
              flexShrink: 0,
              borderRadius: 228,
              overflow: "hidden",
              border: "1px solid #294457",
            }}
          >
            {/* PNG embebido para que el render no dependa del hostname del despliegue. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${mark.toString("base64")}`}
              width={455}
              height={455}
              style={{ width: 455, height: 455, flexShrink: 0, objectFit: "contain" }}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 560,
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                fontSize: 16,
                letterSpacing: 3,
                color: "#edc47e",
                marginBottom: 16,
              }}
            >
              SOFTWARE PARA MUNICIPIOS
            </div>
            <div
              style={{
                fontSize: 94,
                lineHeight: 1,
                letterSpacing: 5,
                fontWeight: 700,
                marginBottom: 28,
              }}
            >
              FARO
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 46,
                lineHeight: 1.15,
                letterSpacing: -1.8,
              }}
            >
              <span>La normativa municipal,</span>
              <span style={{ color: "#edc47e" }}>en claro.</span>
            </div>
            <div
              style={{
                marginTop: 24,
                maxWidth: 490,
                fontSize: 21,
                lineHeight: 1.5,
                color: "#b5c8d5",
              }}
            >
              Digesto digital, búsqueda normativa y mapa legal para gobiernos
              locales.
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #355064",
            paddingTop: 20,
            fontSize: 13,
            letterSpacing: 1.5,
            color: "#b5c8d5",
          }}
        >
          <span>FUENTE ABIERTA DE REGULACIÓN Y ORDENAMIENTO</span>
          <span style={{ color: "#edc47e", fontSize: 17 }}>/faro</span>
        </div>
      </div>
    ),
    { width: 1200, height },
  );
}
