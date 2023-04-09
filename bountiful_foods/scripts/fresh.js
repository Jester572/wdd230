async function getFruit() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitNames = data.map(fruit => fruit.name)
        return fruitNames
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}

async function getCarbohydrates() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitCarbohydrates = data.map(carbohydrates => carbohydrates.nutritions.carbohydrates)
        return fruitCarbohydrates
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}

async function getProtein() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitProtein = data.map(protein => protein.nutritions.protein)
        return fruitProtein
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}
async function getFat() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitFat = data.map(fat => fat.nutritions.fat)
        return fruitFat
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}
async function getCalories() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitCalories = data.map(calories => calories.nutritions.calories)
        return fruitCalories
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}
async function getSugars() {
    try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
        if (response.ok) {
            const data = await response.json()
            fruitSugar = data.map(sugar => sugar.nutritions.sugar)
            // console.log(fruitCalories)
        return fruitSugar
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.log(error)
    }
}

async function fruitInfo() {
    const fruitNames = await getFruit()
    const calories = await getCalories()
    const carbs = await getCarbohydrates()
    const fat = await getFat()
    const sugars = await getSugars()
    const protein = await getProtein()
    const fruitSections = document.querySelectorAll(".fruitsDropdown")
    
    
    fruitSections.forEach((section) => {
        for (i = 0; i < fruitNames.length; i++) {
            const fruitOption = document.createElement('option')
            fruitOption.setAttribute('value', fruitNames[i])
            fruitOption.innerText = fruitNames[i]
            section.appendChild(fruitOption)
        }
    })
}

fruitInfo()
