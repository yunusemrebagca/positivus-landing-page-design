const closeButton = document.querySelector(".header__nav-close");
const openButton = document.querySelector(".header__nav-open");
const navMenu = document.querySelector(".header__nav-links");

const toggleElement = () => {
  navMenu.classList.toggle("active");
};

closeButton.addEventListener("click", () => toggleElement());
openButton.addEventListener("click", () => toggleElement());
