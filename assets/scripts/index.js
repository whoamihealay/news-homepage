const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");
const nav = document.querySelector("#nav");

function navtoggle(isOpen) {
  if (isOpen && !nav.classList.contains("open")) {
    nav.classList.add("open");
  } else if (!isOpen && nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
}

btnOpen.addEventListener("click", () => navtoggle(true));
btnClose.addEventListener("click", () => navtoggle(false));
