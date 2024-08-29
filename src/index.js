const contentDiv = document.querySelector("#content");
const links = document.querySelector(".links")

let cur_page_id = "weather";
const PAGES = new Map();

PAGES.set("weather",
    () => {
        const weatherDiv = document.createElement("div");
        weatherDiv.textContent = "This is the weather";
        return weatherDiv;
    }
)

PAGES.set("about",
    () => {
        const aboutDiv = document.createElement("div");
        aboutDiv.textContent = "About";
        return aboutDiv;
    }
)

PAGES.set("contact",
    () => {
        const contactDiv = document.createElement("contact");
        contactDiv.textContent = "Contact";
        return contactDiv;
    }
)

function setCurPage(pageId) {
    cur_page_id = pageId;
    let event = new CustomEvent("page-change");
    document.dispatchEvent(event);
}

function buildNav() {
    for(let [key, value] of PAGES) {
        const button = document.createElement("button");
        button.textContent = key;
        button.onclick = () => setCurPage(key);
        links.appendChild(button);
    }
}

window.onload = () => {
    buildNav();
    document.addEventListener("page-change", (e) => {
        contentDiv.textContent = "";
        contentDiv.appendChild(PAGES.get(cur_page_id)());
    });
    setCurPage("about");
};