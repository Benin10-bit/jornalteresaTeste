import { News } from "@/types/NewsPanel";
import { JSX } from "react";

export function parseBodyToJSX(
  body: string,
  noticia: News,
): JSX.Element[] | null {
  if (!body) return null;

  const lines = body.split("\n");
  let imageIndex = 1;
  const elements = [];
  let currentList: string[] = [];
  let key = 0;

  lines.forEach((line) => {
    line = line.trim();

    // Títulos
    if (line.startsWith("###")) {
      elements.push(
        <h3
          key={`h3-${key++}`}
          style={{
            color: "var(--titulo)",
            fontFamily: "Playfair Display",
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            fontWeight: "bold",
            marginTop: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          {line.slice(3).trim()}
        </h3>,
      );
      return;
    }
    if (line.startsWith("##")) {
      elements.push(
        <h2
          key={`h2-${key++}`}
          style={{
            color: "var(--titulo)",
            fontFamily: "Playfair Display",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          {line.slice(2).trim()}
        </h2>,
      );
      return;
    }
    if (line.startsWith("#")) {
      elements.push(
        <h1
          key={`h1-${key++}`}
          style={{
            color: "var(--titulo)",
            fontFamily: "Playfair Display",
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          {line.slice(1).trim()}
        </h1>,
      );
      return;
    }

    // Listas
    if (line.startsWith("-")) {
      currentList.push(line.slice(1).trim());
      return;
    } else if (currentList.length) {
      elements.push(
        <ul
          key={`ul-${key++}`}
          style={{
            color: "var(--text)",
            fontFamily: "Libre Baskerville",
            marginLeft: "clamp(1.5rem, 5vw, 3rem)",
            marginTop: "1rem",
            marginBottom: "1rem",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            lineHeight: "1.8",
          }}
        >
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: "0.5rem" }}>
              {item}
            </li>
          ))}
        </ul>,
      );
      currentList = [];
    }

    // Imagens
    if (line === "/imagem") {
      const imgUrl = noticia[`image${imageIndex}` as keyof News];
      imageIndex++;
      if (imgUrl && typeof imgUrl === "string") {
        elements.push(
          <img
            key={`img-${key++}`}
            src={imgUrl}
            alt={`imagem${imageIndex - 1}`}
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              borderRadius: "15px",
              objectFit: "cover",
            }}
            loading="lazy"
          />,
        );
      }
      return;
    }

    // Parágrafos
    if (line !== "") {
      elements.push(
        <p
          key={`p-${key++}`}
          style={{
            color: "var(--text)",
            fontFamily: "Libre Baskerville",
            marginTop: "1rem",
            marginBottom: "1rem",
            lineHeight: "1.8",
            fontSize: "clamp(1rem, 2vw, 1rem)",
            textAlign: "justify",
          }}
        >
          {line}
        </p>,
      );
    }
  });

  // Lista final se houver
  if (currentList.length) {
    elements.push(
      <ul
        key={`ul-${key++}`}
        style={{
          color: "var(--text)",
          fontFamily: "Libre Baskerville",
          marginLeft: "clamp(1.5rem, 5vw, 3rem)",
          marginTop: "1rem",
          marginBottom: "1rem",
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          lineHeight: "1.8",
        }}
      >
        {currentList.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            {item}
          </li>
        ))}
      </ul>,
    );
  }

  return elements;
}
