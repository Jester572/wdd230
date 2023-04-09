


//Adds event listeners for the number of orders
const confirmation = document.querySelector(".orderConfirmation");
const submit = document.getElementById("submitBtn");
let count = localStorage.getItem("numOrders") || 0;

submit.addEventListener("click", () => {
  const firstName = document.querySelector('input[name="first name"]').value;
  const lastName = document.querySelector('input[name="email"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  if (firstName === "" || lastName === "" || phone === "") {
    alert("Please fill out all required fields in Contact Information");
    return false;
  } else {
    confirmation.setAttribute("id", "show");
    count++;
    localStorage.setItem("numOrders", count);
    console.log(`Number of Submitted orders ${count}`);


    //receives all the data from the form and puts it into the confirmation
    const form = document.querySelector('form');
    const formData = new FormData(form);

    const firstName = formData.get('first name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const size = formData.get('size');
    const base = formData.get('base');
    const fruit1 = formData.get('fruit1');
    const fruit2 = formData.get('fruit2');
    const fruit3 = formData.get('fruit3');
    const specialInstructions = formData.get('specialInstructions');

    document.getElementById("customerName").innerHTML = `<strong>Name:</strong> ${firstName}`
    document.getElementById("customerEmail").innerHTML = `<strong>Email:</strong> ${email}`
    document.getElementById("customerPhone").innerHTML = `<strong>Phone:</strong> ${phone}`
    document.getElementById("drinkSize").innerHTML = `<strong>Drink Size:</strong> ${size}`
    document.getElementById("drinkBase").innerHTML = `<strong>Base:</strong> ${base}`
    document.getElementById("drinkFruit1").innerHTML = `<strong>Fruit 1:</strong> ${fruit1}`
    document.getElementById("drinkFruit2").innerHTML = `<strong>Fruit 2:</strong> ${fruit2}`
    document.getElementById("drinkFruit3").innerHTML = `<strong>Fruit 3:</strong> ${fruit3}`
    document.getElementById("instructions").innerHTML = `<strong>Special Instructions:</strong> ${specialInstructions}`

  }
});

// Gets all the information for the fruits
async function getFruit() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitNames = data.map((fruit) => fruit.name);
      return fruitNames;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCarbohydrates() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitCarbohydrates = data.map(
        (carbohydrates) => carbohydrates.nutritions.carbohydrates
      );
      return fruitCarbohydrates;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getProtein() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitProtein = data.map((protein) => protein.nutritions.protein);
      return fruitProtein;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
async function getFat() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitFat = data.map((fat) => fat.nutritions.fat);
      return fruitFat;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
async function getCalories() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitCalories = data.map((calories) => calories.nutritions.calories);
      return fruitCalories;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
async function getSugars() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (response.ok) {
      const data = await response.json();
      fruitSugar = data.map((sugar) => sugar.nutritions.sugar);
      // console.log(fruitCalories)
      return fruitSugar;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

//compiles fruits into dropdown
async function fruitInfo() {
  const fruitNames = await getFruit();
  const calories = await getCalories();
  const carbs = await getCarbohydrates();
  const fat = await getFat();
  const sugars = await getSugars();
  const protein = await getProtein();
  const fruitSections = document.querySelectorAll(".fruitsDropdown");

  fruitSections.forEach((section) => {
    for (i = 0; i < fruitNames.length; i++) {
      const fruitOption = document.createElement("option");
      fruitOption.setAttribute("value", fruitNames[i]);
      fruitOption.innerText = fruitNames[i];
      section.appendChild(fruitOption);
    }
  });
}

fruitInfo();
