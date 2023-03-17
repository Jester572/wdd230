//Last visit
//call variables
const visitsDisplay = document.querySelector("#visits");
let today = Date.now();
let lastVisited = localStorage.getItem("dateVisited");

//if lastVisited is null, print first time message and store todays date
//else calculates the last time visited
if (lastVisited !== null) {
    localStorage.setItem("dateVisited", today);
    between = today - lastVisited;
    visit = Math.round(between / 86400000);
    
} else {
    localStorage.setItem("dateVisited", today);
    visit = visitsDisplay.textContent = `This is your first visit!`;
}

visitsDisplay.textContent = visit;