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
