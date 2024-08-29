




export function createImage(doc, src, alt) {
    const image = doc.createElement("img");
    image.src = src;
    image.alt = alt;
    return image;
}

export function createAnchor(doc, href) {
    const anc = doc.createElement("a");
    anc.href = href;
    return anc;
}