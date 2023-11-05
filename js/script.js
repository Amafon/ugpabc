const mainNavEl = document.querySelector(".main-nav");
const menuEl = document.querySelector(".menu");
const espEl = document.querySelector(".esp");
const sectionEsp = document.querySelector("#about");
const headerContainerEl = document.querySelector(".header-container");

mainNavEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.dataset.id;
    const sectionEl = document.querySelector("#" + id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});

espEl.addEventListener("click", function (e) {
  e.preventDefault();
  sectionEsp.scrollIntoView({ behavior: "smooth" });
});

menuEl.addEventListener("click", function () {
  headerContainerEl.classList.toggle("hidden");
});
