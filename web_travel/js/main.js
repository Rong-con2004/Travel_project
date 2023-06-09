// open-close btn-user
const btnUser = document.querySelector(".js-btn-user");
const formUser = document.querySelector(".subnav-user");

document.addEventListener("click", function (event) {
  if (event.target !== btnUser && event.target !== formUser) {
    formUser.classList.remove("open");
  }
});

$(".js-btn-user").click(function () {
  $(".subnav-user").toggleClass("open");
});

// scroll header & gotopbtn
window.onscroll = function () {
  console.info(document.documentElement.scrollTop);
  var header = document.getElementById("Header");
  var gotopbtn = document.getElementById("gotopbtn");

  if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.margin = "0 0";
    header.style.width = "100%";
    header.style.background = "linear-gradient(45deg, #4366c5, #5d85d4)";
    header.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.4)";
    header.style.borderRadius = "0 0 12px 12px";
    header.style.zIndex = 9;

    gotopbtn.style.display = "flex";
  } else {
    header.style.position = "absolute";
    header.style.margin = "0 0";
    header.style.width = "100%";
    header.style.background = "rgba(0, 0, 0, 0.1)";
    header.style.boxShadow = "0px 0px 0px 0px";
    header.style.borderRadius = "0";

    gotopbtn.style.display = "none";
  }
};

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

// slick slider
$(document).ready(function () {
  $(".list-fd").slick({
    infinite: true,
    slidesToShow: 3,
    dots: false,
    autoplay: false,
    cssEase: "linear",
    swipeToSlide: true,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa-light fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa-light fa-chevron-right'></i></button>",
  });
});
