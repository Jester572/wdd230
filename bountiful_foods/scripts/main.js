
//Hamburger menu
const mainNav = document.querySelector("#small-navigation");
const hamburger = document.querySelector("#menu");

hamburger.addEventListener("click", () => { mainNav.classList.toggle("responsive") }, false);
hamburger.addEventListener("click", () => { if (hamburger.innerHTML == "X") { hamburger.innerHTML = "&#9776;"; } else { hamburger.innerHTML = "X"; }; });

if (localStorage.getItem('numOrders') === null) {
    localStorage.setItem('numOrders', 0)
}
let mainCount = localStorage.getItem('numOrders')

if (document.querySelector("#drinks") != null) {
    document.querySelector("#drinks").innerHTML = mainCount
}