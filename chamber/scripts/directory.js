const url = "./data/data.json";

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members)
    displayMembers(data.members);
};

function displayMembers(members) {
    const cards = document.querySelector('div.cards'); 

    members.forEach((member) => {
        let card = document.createElement('section');
        card.setAttribute('class','card');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let portrait = document.createElement('img');
        

        // Set information
        h2.textContent = member.companyName;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        
        

        //set attributes
        portrait.setAttribute('src', member.logo);
        portrait.setAttribute('alt',`logo of ${member.companyName}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

       

        

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        
         if (member.website != null){
            let website = document.createElement('a');
            website.textContent = "Website";
            website.setAttribute('href', member.website);
            card.appendChild(website);
        }
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getCompanyData();