// log-in
const btn = document.querySelector(".js-log-in");
const btnUser = document.querySelector(".js-log-in-img");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

function showLogIn() {
  modal.classList.add("open");
}
function hideLogIn() {
  modal.classList.remove("open");
}

btn.addEventListener("click", showLogIn);
btnUser.addEventListener("click", showLogIn);
modalClose.addEventListener("click", hideLogIn);
modal.addEventListener("click", hideLogIn);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

document
  .getElementById("invitation-log-in")
  .addEventListener("click", function () {
    modalSignUp.classList.remove("open");
    modal.classList.add("open");
  });

// sign-up
const modalSignUp = document.querySelector(".js-modal-signup");
const modalContainerSignUp = document.querySelector(".js-container-signup");
const modalCloseSignUp = document.querySelector(".js-close");

function showSignUp() {
  modalSignUp.classList.add("open");
}
function hideSignUp() {
  modalSignUp.classList.remove("open");
}

modalCloseSignUp.addEventListener("click", hideSignUp);
modalSignUp.addEventListener("click", hideSignUp);

modalContainerSignUp.addEventListener("click", function (event) {
  event.stopPropagation();
});

document
  .getElementById("js-span-signup")
  .addEventListener("click", function () {
    modal.classList.remove("open");
    modalSignUp.classList.add("open");
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
