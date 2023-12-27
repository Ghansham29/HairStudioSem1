var menuBtn = document.getElementById("menuBtn");
var slideNav = document.getElementById("slideNav");
var menu = document.getElementById("menu");

slideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (slideNav.style.right == "-250px") {
    slideNav.style.right = "0";
    menu.src = "Barber_Shop_img/close.png";
  } else {
    slideNav.style.right = "-250px";
    menu.src = "Barber_Shop_img/menu.png";
  }
}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
