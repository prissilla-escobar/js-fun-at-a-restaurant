function nameMenuItem(name) {
return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: "Delicious French Toast",
    price: 10.99,
    type: "breakfast",
  }
  return menuItem
}

function addIngredients(food, ingredients) {
  return [ingredients.push(food)]  
  }


function formatPrice(newPrice) {
  return (`$${newPrice}`)

}

function decreasePrice(decreasedPrice, price) {
  return (decreasedPrice*.9)
}

function createRecipe(recipe, ingredients, type) {
  var recipe = {
    recipe: menuItem.name,
    ingredients: ingredients,
    type: type

  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


