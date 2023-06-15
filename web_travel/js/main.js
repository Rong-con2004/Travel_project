// Link hover effects
const menuLinks = document.querySelectorAll(".menu-link");
const line = document.createElement("div");
const menu = document.querySelector(".menu-header");
line.className = "line-effects";
document.body.appendChild(line);

menuLinks.forEach((link) =>
  link.addEventListener("mouseenter", handleLinkHover)
);
menu.addEventListener("mouseleave", handleLeaveMenu);

function handleLeaveMenu() {
  line.style.width = 0;
}
function handleLinkHover(event) {
  const elm = event.target;
  const elmRect = elm.getBoundingClientRect();
  const { width, left, height, top } = elmRect;
  const offsetBottom = 2;
  line.style.width = `${width}px`;
  line.style.left = `${left}px`;
  line.style.top = `${top + height + offsetBottom}px`;
}
// open-close btn-user
const btnUser = document.querySelector(".js-btn-user");
const formUser = document.querySelector(".js-subnav-user");

function showFormUser() {
  formUser.classList.add("open");
}
btnUser.addEventListener("click", showFormUser);
document.addEventListener("click", function (event) {
  if (event.target !== btnUser && event.target !== formUser) {
    formUser.classList.remove("open");
  }
});

// slideshow
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) myIndex = 1;
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}
