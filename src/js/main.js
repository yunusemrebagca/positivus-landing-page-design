const closeButton = document.querySelector(".header__nav-close");
const openButton = document.querySelector(".header__nav-open");
const navMenu = document.querySelector(".header__nav-links");

const toggleElement = () => {
  navMenu.classList.toggle("active");
};

closeButton.addEventListener("click", () => toggleElement());
openButton.addEventListener("click", () => toggleElement());

const accordionCards = document.querySelectorAll(".accordion__card");

accordionCards.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.querySelector(".accordion__card-description").classList.toggle("open");

    document
      .querySelectorAll(".accordion__card-description")
      .forEach((item1, index1) => {
        if (index != index1) {
          item1.classList.remove("open");
        }
      });
    accordionCards.forEach((item1) => {
      if (
        item1
          .querySelector(".accordion__card-description")
          .classList.contains("open")
      ) {
        item1.querySelector(".icon i").classList.replace("fa-plus", "fa-minus");
      } else {
        item1.querySelector(".icon i").classList.replace("fa-minus", "fa-plus");
      }
    });
  });
});
