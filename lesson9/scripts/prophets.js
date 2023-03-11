const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets)
    displayProphets(data.prophets);
};

function displayProphets(prophets) {
    const cards = document.querySelector('div.cards'); 

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.setAttribute('class','card');
        let h2 = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');
        let fullName = `${prophet.name} ${prophet.lastname}`;

        // Set information
        h2.textContent = fullName;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //set attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt',`Portrait of ${fullName}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
getProphetData();