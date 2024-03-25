export function validateTitle(title: string) {
  if (!title.trim()) {
    console.log("El título no puede estar vacío.");
    return false;
  }
  return true;
}

export function capitalizeTitle(title: string) {
  return title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateSlug(title: string) {
  return title
    .split(" ")
    .slice(0, 5)
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

export function processSections(editorContent: any) {
  const sectionsRaw = editorContent.split(/<h1>/g).slice(1);

  return sectionsRaw.map((sectionRaw: any) => {
    const [header, ...contentRaw] = sectionRaw.split("</h1>");
    const contentAndSubsectionsRaw = contentRaw.join("</h1>").trim();
    const subsectionsRaw = contentAndSubsectionsRaw.split(/<h2>/g).slice(1);

    let content = [];
    let subsections = [];

    if (subsectionsRaw.length === 0) {
      content = extractContentItems(contentAndSubsectionsRaw);
    } else {
      const contentBeforeFirstSubsection =
        contentAndSubsectionsRaw.split("<h2>")[0];
      content = extractContentItems(contentBeforeFirstSubsection);

      subsections = subsectionsRaw.map(subsectionProcessing);
    }

    return {
      header: header.trim(),
      content: content,
      subsections: subsections,
    };
  });
}

export function subsectionProcessing(subsectionRaw: any) {
  const [subheader, subcontentRaw] = subsectionRaw.split("</h2>");
  const subcontent = extractContentItems(breakLine(subcontentRaw));

  return {
    title: subheader.trim(),
    content: subcontent,
  };
}

function extractContentItems(htmlString: any) {
  const images = extractImages(htmlString);
  console.log(images);
  const paragraphMatches = htmlString.match(/<p>.*?<\/p>/g) || [];
  return paragraphMatches.map((paragraph: any) => ({
    type: "text",
    data: paragraph.replace(/<\/?p>/g, "").trim(),
  }));
}

function breakLine(htmlString: string): string {
  // Reemplaza todos los <br> por \n en la cadena HTML y devuelve la cadena modificada
  return htmlString.replace(/<br\s*\/?>/g, "\n");
}

function extractImages(htmlString: string) {
  // Busca todas las ocurrencias de etiquetas <img> con un atributo src
  const imgTagMatches = htmlString.match(/<img src="[^"]+"[^>]*>/g) || [];

  // Procesa cada etiqueta <img> encontrada para extraer su src
  return imgTagMatches.map((imgTag) => {
    const srcMatch = imgTag.match(/src="([^"]+)"/);
    return {
      type: "image",
      src: srcMatch ? srcMatch[1] : "", // Captura el valor de src, o devuelve una cadena vacía si no se encuentra
    };
  });
}
