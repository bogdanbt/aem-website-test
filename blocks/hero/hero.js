//
const img = block.querySelector("img");
if (img) {
  img.setAttribute("loading", "eager"); // грузим сразу
  img.setAttribute("fetchpriority", "high"); // приоритет в сети
}
