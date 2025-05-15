export default function decorate(block) {
  const picture = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const paragraphs = block.querySelectorAll("p");

  if (!picture || !heading) return;

  let description = null;
  let link = null;

  paragraphs.forEach((p) => {
    const a = p.querySelector("a");
    if (a && !link) {
      link = a;
      p.remove(); // 💥 удаляем обёртку <p>, чтобы не мешала
    } else if (!description) {
      description = p;
    }
  });

  const wrapper = document.createElement("div");
  wrapper.className = "hero-wrapper";

  picture.classList.add("hero-image");

  const content = document.createElement("div");
  content.className = "hero-content";

  content.appendChild(heading);
  if (description) content.appendChild(description);

  if (link) {
    // Автостили по тексту
    const text = link.textContent.trim().toLowerCase();
    link.classList.add("button"); // базовый стиль

    if (text.includes("primary")) {
      link.classList.add("primary");
    } else if (text.includes("secondary")) {
      link.classList.add("secondary");
    } else if (text.includes("default")) {
      link.classList.add("default");
    }

    content.appendChild(link);
  }

  wrapper.append(picture, content);
  block.innerHTML = "";
  block.append(wrapper);
}
