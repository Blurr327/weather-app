import {generate_about} from "./pages/about.js";
import {generate_contact} from "./pages/contact.js";

const contentDiv = document.querySelector("#content");
const links = document.querySelector(".links")

let cur_page_id = "weather";
const PAGES = new Map();

PAGES.set("weather",
    (doc) => {
        const weatherDiv = doc.createElement("div");
        weatherDiv.textContent = "This is the weather";
        return weatherDiv;
    }
)

PAGES.set("about",
    generate_about
)

PAGES.set("contact",
    generate_contact
)

function setCurPage(pageId) {
    cur_page_id = pageId;
    let event = new CustomEvent("page-change");
    document.dispatchEvent(event);
}

function buildNav() {
    for(let key of PAGES.keys()) {
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
        contentDiv.appendChild(PAGES.get(cur_page_id)(document));
    });
    setCurPage("about");
};