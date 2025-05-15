export default async function decorate(block) {
  const picture = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const paragraph =
    heading?.nextElementSibling?.tagName === "P"
      ? heading.nextElementSibling
      : null;
  const link = paragraph?.nextElementSibling?.querySelector("a");

  if (!picture || !heading) return;

  block.innerHTML = "";
  const heroWrapper = document.createElement("div");
  heroWrapper.className = "hero-wrapper";

  picture.classList.add("hero-image");
  const content = document.createElement("div");
  content.className = "hero-content";

  content.appendChild(heading);
  if (paragraph) content.appendChild(paragraph);
  if (link) {
    link.classList.add("button");
    content.appendChild(link.closest("p") || link);
  }

  heroWrapper.append(picture, content);
  block.appendChild(heroWrapper);
}
