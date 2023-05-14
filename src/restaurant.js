

function createRestaurant(name) {
return pizzaRestaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  },
}
}

function addMenuItem(pizzaRestaurant, foodType) {
  if (pizzaRestaurant.menus[foodType.type].includes(foodType) != true) 
  pizzaRestaurant.menus[foodType.type].push(foodType)
}

function removeMenuItem(pizzaRestaraunt, foodType, dayTime) {
  var menu = pizzaRestaurant.menus[dayTime]
  for (var i =0; i < menu.length; i++) {
    if (menu[i].name === foodType)
    menu.splice(i, 1)
    return `No one is eating our ${foodType} - it has been removed from the ${dayTime} menu!`
  }
    return `Sorry, we don't sell ${foodType}, try adding a new recipe!`
}

function checkForFood(pizzaRestaurant, foodItem) {
  var menu = pizzaRestaurant.menus[foodItem.type]
  for (var i =0; i < menu.length; i++) {
    if (menu[i].name === foodItem.name) {
    return `Yes, we're serving ${foodItem.name} today!`
    } 
}
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}