function nameMenuItem(name) {
return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food) !== true)
  return ingredients.push(food)
}


function formatPrice(price) {
  return `$${price}`

}

function decreasePrice(price) {
  return `${price}` * .9
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


