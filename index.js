var cart = [];

function getCart(item) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = new Object ({ itemName : item,
      itemPrice : Math.floor(Math.random()*101)
  });
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if(!cart.length) return 'Your shopping cart is empty.'
  let sentenceStart='In your cart, you have '
  if(cart.length>=1) {
    sentenceStart+=`${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  if(cart.length>=2) {
    middleSentence=''
    for (let i=1; i<cart.length-1; i++) {
      middleSentence+= `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    sentenceStart+= `${middleSentence}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
