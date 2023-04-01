
//Hamburger menu
const mainNav = document.querySelector("#small-navigation");
const hamburger = document.querySelector("#menu");

hamburger.addEventListener("click", () => {mainNav.classList.toggle("responsive")}, false);
hamburger.addEventListener("click", () => {if(hamburger.innerHTML == "X"){hamburger.innerHTML = "&#9776;";} else {hamburger.innerHTML = "X";};});