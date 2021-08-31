document.querySelector(".navbar-btn").addEventListener("click", () => {
  document.querySelector(".navbar-wrapper").classList.toggle("change");
});

const burgerBtn = document.querySelector(" header > span");
const navWrapper = document.querySelector(".adaptate_nav_wrapper");
const nav = document.querySelector(".adaptate_nav_wrapper .adaptate_nav");
const links = document.querySelectorAll(".adaptate_nav > ul.links li");
const wrapper = document.querySelector(".wrapper");

burgerBtn.addEventListener("click", () => {
  links.forEach((link) => link.classList.remove("active"));
  animOnScroll();
  navWrapper.style.opacity = 1;
  navWrapper.style.height = wrapper.offsetHeight + "px";
  nav.style.width = "30%";
  document.body.overflow = "hidden";
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
  navWrapper.style.opacity = 0;
  nav.style.width = "0%";
  navWrapper.style.height = 0;
  links.forEach((link) => link.classList.remove("active"));
}

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  window.addEventListener("resize", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemPoint > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("active");
      } else {
        if (!animItem.classList.contains("_anim-on-hide"))
          animItem.classList.remove("active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(animOnScroll, 300);
}
