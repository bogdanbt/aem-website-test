export default function decorate(block) {
  const picture = block.querySelector("picture");
  const heading = block.querySelector("h1, h2");
  const paragraphs = block.querySelectorAll("p");

  console.log("[HERO] ⬇️ Найдено picture:", picture);
  console.log("[HERO] ⬇️ Найден заголовок:", heading);
  console.log("[HERO] ⬇️ Все параграфы:", paragraphs);

  if (!picture || !heading) return;

  let description = null;
  let link = null;

  paragraphs.forEach((p) => {
    const a = p.querySelector("a");
    if (a && !link) {
      link = a;
      console.log("[HERO] ✅ Найдена ссылка-кнопка:", link.textContent);
      p.remove(); // удаляем <p>
    } else if (!description) {
      description = p;
      console.log("[HERO] 📄 Найден description:", description.textContent);
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
    const text = link.textContent.trim().toLowerCase();
    console.log("[HERO] 🧪 Текст кнопки:", text);

    link.classList.add("button");

    if (text.includes("primary")) {
      link.classList.add("primary");
    } else if (text.includes("secondary")) {
      link.classList.add("secondary");
    } else if (text.includes("default")) {
      link.classList.add("default");
    }

    content.appendChild(link);
    console.log("[HERO] ✅ Кнопка вставлена в hero-content");
  } else {
    console.warn("[HERO] ⚠️ Кнопка не найдена!");
  }

  wrapper.append(picture, content);
  block.innerHTML = "";
  block.append(wrapper);

  console.log("[HERO] ✅ Hero блок построен");
}
