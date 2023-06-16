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

// scroll header
window.onscroll = function () {
  console.info(document.documentElement.scrollTop);
  var header = document.getElementById("js-Header");
  if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.margin = "0 0.5%";
    header.style.width = "99%";
    header.style.background = "linear-gradient(45deg, #4366c5, #5d85d4)";
    header.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.4)";
    header.style.borderRadius = "12px";
    header.style.zIndex = 9;
  } else {
    header.style.position = "absolute";
    header.style.margin = "0 0";
    header.style.width = "100%";
    header.style.background = "rgba(0, 0, 0, 0.1)";
    header.style.boxShadow = "0px 0px 0px 0px";
    header.style.borderRadius = "0";
  }
};

// slideshow
// var myIndex = 0;
// carousel();
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide-images");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) myIndex = 1;
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 5000);
// }
