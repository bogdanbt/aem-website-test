export default function decorate(block) {
  const img = block.querySelector("img");
  const title = block.querySelector("h1, h2, h3");
  const description = block.querySelector("p");
  const button = block.querySelector("a");

  block.classList.add("hero");

  if (img) {
    const picture = document.createElement("picture");
    picture.classList.add("hero-image");
    picture.appendChild(img);
    block.prepend(picture);
  }

  const content = document.createElement("div");
  content.className = "hero-content";

  if (title) content.appendChild(title);
  if (description) content.appendChild(description);
  if (button) {
    button.classList.add("button");
    content.appendChild(button);
  }

  block.appendChild(content);
}
