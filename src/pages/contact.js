import xIcon from "../../assets/icons/x.svg";
import githubIcon from "../../assets/icons/github-mark.svg";
import {createImage, createAnchor} from "../../utils/dom.js";

export function generate_contact(doc) {
    const contactDiv = doc.createElement("div");
    const icons = doc.createElement("div");
    icons.class = "icons";
    const xImage = createImage(doc, xIcon, "X Icon");
    const gitHubImage = createImage(doc, githubIcon, "github Icon");
    contactDiv.id="contact";
    const ancX = createAnchor(doc, "https://x.com/Blurr3271");
    ancX.appendChild(xImage);
    const ancGit = createAnchor(doc, "https://github.com/Blurr327");
    const p  = doc.createElement("p");
    p.textContent = "You can send me an email at : notgonnagiveyoumyemail@gmail.com";
    contactDiv.appendChild(p);
    ancGit.appendChild(gitHubImage);
    icons.appendChild(ancX);
    icons.appendChild(ancGit);
    contactDiv.appendChild(icons);
    return contactDiv;
}