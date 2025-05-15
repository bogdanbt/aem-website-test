export default function decorate(block) {
  const img = block.querySelector("img");
  if (img) {
    img.setAttribute("loading", "eager");
    img.setAttribute("fetchpriority", "high");
  }

  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  const content = document.createElement("div");
  content.className = "hero-content";

  const heading = block.querySelector("h1, h2");
  const desc = block.querySelector("p");
  const link = block.querySelector("a");

  if (heading) content.appendChild(heading);
  if (desc) content.appendChild(desc);
  if (link) {
    link.classList.add("button");
    content.appendChild(link.closest("p") || link);
  }

  const picture = block.querySelector("picture");
  if (picture) picture.classList.add("hero-image");

  wrapper.append(picture, content);
  block.innerHTML = "";
  block.append(wrapper);
}
