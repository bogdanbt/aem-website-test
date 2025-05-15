export default function decorate(block) {
  const pic = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const allParagraphs = block.querySelectorAll("p");
  const desc = allParagraphs.length > 0 ? allParagraphs[0] : null;
  const linkP = allParagraphs.length > 1 ? allParagraphs[1] : null;
  const link = linkP?.querySelector("a");

  if (!pic || !heading) return;

  const img = pic.querySelector("img");
  if (img) {
    img.setAttribute("loading", "eager");
    img.setAttribute("fetchpriority", "high");
  }

  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  const content = document.createElement("div");
  content.className = "hero-content";
  content.appendChild(heading);
  if (desc) content.appendChild(desc);
  if (link) {
    link.classList.add("button");
    content.appendChild(linkP);
  }

  pic.classList.add("hero-image");
  wrapper.append(pic, content);
  block.innerHTML = "";
  block.append(wrapper);
}
