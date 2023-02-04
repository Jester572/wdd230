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
const now = new Date('August 19, 1975 23:15:30');
const fulldate = new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(now);

addDate.innerHTML = `${fulldate}`;

// join us banner at top of page
const join = document.querySelector(".join") 
if (now.getDay() == 1 || now.getDay() == 2) {
    join.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}
