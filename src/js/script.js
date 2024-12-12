let toggle = document.querySelector(".header__menu-btn");
let nav = document.querySelector(".header__menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "false";
    const isClosed = !isOpen;
    console.log(isOpen, isClosed);
    toggle.ariaExpanded = isOpen;
    nav.ariaExpanded = isClosed;
    page.classList.toggle("noscroll", isClosed);
  });
}

const carrousels = document.querySelectorAll(".article--carrousel");

carrousels.forEach((carrousel) => {
  const container = carrousel.querySelector(".article__carrousel");
  const prevButton = carrousel.querySelector(".carrousel__btn--prev");
  const nextButton = carrousel.querySelector(".carrousel__btn--next");

  if (!container || !prevButton || !nextButton) return;

  prevButton.addEventListener("click", () => {
    container.scrollBy({
      left: -container.offsetWidth,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    container.scrollBy({
      left: container.offsetWidth,
      behavior: "smooth",
    });
  });
});
