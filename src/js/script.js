let toggle = document.querySelector(".header__menu-btn");
let nav = document.querySelector(".header__menu");
const page = document.body;
let menuIsOpen = false;
const homeIcon = document.querySelector(".home__icon");
let pastHomeIcon = homeIcon.src;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "false";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isOpen;
    nav.ariaExpanded = isClosed;
    page.classList.toggle("noscroll", isClosed);
    menuIsOpen = isClosed;
    console.log("menuIsOpen", menuIsOpen);
    if (menuIsOpen) {
      pastHomeIcon = homeIcon.src;
      homeIcon.src = "assets/svg/logo_blanc.svg";
    } else homeIcon.src = pastHomeIcon;
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

const menuBtn = document.querySelector(".menu-btn__bar");
const mainSection = document.querySelector("main");

window.addEventListener("scroll", () => {
  if (window.scrollY > mainSection.offsetTop) {
    toggle.classList.add("menu-btn--scrolled");
    homeIcon.src = "assets/svg/logo_gris.svg";
  } else {
    toggle.classList.remove("menu-btn--scrolled");
    homeIcon.src = "assets/svg/logo_blanc.svg";
  }
});
