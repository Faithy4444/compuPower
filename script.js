
let cart = [];

const addToCart = (product, price) => {
    let cartItems = document.getElementById("cart-items");
    cart.push(product, price);
    cartItems.innerHTML = cart

}

console.log(addToCart("car", "2000"))