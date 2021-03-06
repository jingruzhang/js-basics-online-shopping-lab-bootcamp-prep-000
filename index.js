var cart = [];

function setCart(newCart) {
  cart = newCart;
}


function getCart() {
  return cart
}


function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}


function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }

  var itemAndPrices = []
  var items = Object.keys(cart)
  for (var i=0; i<cart.length; i++) {
    var item = items[i]
    var price = cart[item]
    itemAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`)
}


function removeFromCart(item) {
  for (var i=0;i<cart.length; i++) {
    if (!cart[i].hasOwnProperty(item)) {
      console.log("That item is not in your cart.")
    } else {
      delete cart[item]
    }
  }
  return cart
}


function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCard}.`)
  cart = []
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
