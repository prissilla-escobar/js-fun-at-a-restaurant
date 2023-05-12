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


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


