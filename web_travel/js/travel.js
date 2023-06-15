// Modal
var modal = document.getElementById("myModal");

var close = document.getElementById("close");

function openModal() {
    modal.style.display = "flex";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
}

$(document).ready(function(){
  $("#content-up").hide();
  // $(".modal-search").hide();
    //  Menu

    // $(".menu-dropdown").hide();
    $("#content-down").click(function(){
      $(".menu-dropdown").show(1000);
      $("#content-up").show(1000);
      $("#content-down").hide(1000);
    });
    $("#content-up").click(function(){
      $(".menu-dropdown").hide(1000);
      $("#content-down").show(1000);
      $("#content-up").hide(1000);
    });

    // Search

    $(".header__middle a").click(function(){
      $(".header__middle input").show();
      $(".modal-search").show(); 
    });
    $(".modal-search").click(function(){
      $(".header__middle input").hide();
      $(".modal-search").hide();
    });
  });