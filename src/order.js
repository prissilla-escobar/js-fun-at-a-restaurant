
function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3)
   deliveryOrders.push(order)
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  var newArray = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    newArray.push(deliveryOrders[i].item)
  }
 return newArray.join(', ')
}

function searchOrder(deliveryOrders, item) {
  var array = []
for (var i = 0; i < deliveryOrders.length; i++) {
  array.push(deliveryOrders[i].item) 
  array.join(',') } {
  if (array.includes(item)) {
  return true
  } else {
    return false
  }
}
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}