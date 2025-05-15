export default function decorate(block) {
  const picture = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const paragraphs = block.querySelectorAll("p");
  const description = paragraphs[0];
  const link = paragraphs.length > 1 ? paragraphs[1].querySelector("a") : null;

  if (!picture || !heading) return;

  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  picture.classList.add("hero-image");

  const content = document.createElement("div");
  content.className = "hero-content";
  content.appendChild(heading);
  if (description) content.appendChild(description);
  if (link) {
    link.classList.add("button");
    content.appendChild(link);
  }

  wrapper.append(picture, content);
  block.innerHTML = "";
  block.append(wrapper);
}
