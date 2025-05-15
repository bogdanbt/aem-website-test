export default function decorate(block) {
  const pic = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const allParagraphs = block.querySelectorAll("p");
  const desc = allParagraphs.length > 0 ? allParagraphs[0] : null;
  const link =
    allParagraphs.length > 1 ? allParagraphs[1].querySelector("a") : null;

  if (!pic || !heading) return;

  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  pic.classList.add("hero-image");

  const content = document.createElement("div");
  content.className = "hero-content";
  content.appendChild(heading);

  if (desc) content.appendChild(desc);
  if (link) {
    link.classList.add("button");
    content.appendChild(link.closest("p"));
  }

  wrapper.append(pic, content);
  block.innerHTML = "";
  block.append(wrapper);
}
