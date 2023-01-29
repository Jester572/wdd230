// Last modified date
let lastModif = new Date(document.lastModified).toLocaleString();
document.getElementById("updatetime").textContent = 'Last Updated:' + lastModif;

//Hamburger menu
const mainNav = document.querySelector(".navigation");
const hamburger = document.querySelector("#menu");

hamburger.addEventListener("click", () => {mainNav.classList.toggle("responsive")}, false);
hamburger.addEventListener("click", () => {if(hamburger.innerHTML == "X"){hamburger.innerHTML = "&#9776;";} else {hamburger.innerHTML = "X";};});

//updateTime
const addDate = document.querySelector(".timeNow");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(now);


addDate.innerHTML = `${fulldate}`; 
