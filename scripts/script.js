document.querySelector(".navbar-btn").addEventListener("click", () => {
  document.querySelector(".navbar-wrapper").classList.toggle("change");
});

const burgerBtn = document.querySelector(" header > span");
const navWrapper = document.querySelector(".adaptate_nav_wrapper");
const nav = document.querySelector(".adaptate_nav_wrapper .adaptate_nav");
const links = document.querySelectorAll(".adaptate_nav > ul.links li a");
const wrapper = document.querySelector(".wrapper");
console.log(links);
burgerBtn.addEventListener("click", () => {
  navWrapper.style.width = "100%";
  navWrapper.style.height = wrapper.offsetHeight + "px";
  nav.style.width = "30%";
  document.body.overflow = "hidden";
  links.forEach((link) => (link.style.opacity = 1));
});

navWrapper.addEventListener("click", (e) => {
  if (e.target === navWrapper) {
    closeNav();
  }
});

links.forEach((item) => {
  item.addEventListener("click", closeNav);
});

function closeNav() {
  navWrapper.style.width = "0%";
  nav.style.width = "0%";
  navWrapper.style.height = 0;
  links.forEach((link) => (link.style.opacity = 0));
}
