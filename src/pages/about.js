

export function generate_about(doc) {
    const aboutDiv = doc.createElement("div");
    aboutDiv.id = "about";
    aboutDiv.textContent = `This project was created by Mohamed BEN EL MOSTAPHA.
        It's made using html, css and javascript. Webpack was also used to bundle the application.`;
    return aboutDiv;
}