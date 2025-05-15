export default function decorate(block) {
  const img = block.querySelector("img");
  const title = block.querySelector("h1, h2, h3");
  const description = block.querySelector("p");
  const button = block.querySelector("a");

  block.classList.add("hero");

  if (img) {
    const picture = img.closest("p");
    picture.classList.add("hero-image");
    block.prepend(picture);
  }

  const content = document.createElement("div");
  content.className = "hero-content";

  if (title) content.append(title);
  if (description) content.append(description);
  if (button) button.classList.add("button");
  if (button) content.append(button);

  block.append(content);
}
