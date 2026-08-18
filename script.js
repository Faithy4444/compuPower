
let cart = [];

const addToCart = (product, price) => {
    let cartItems = document.getElementById("cart-items");
    cart.push({ product, price });
    cartItems.innerHTML = JSON.stringify(cart);

    return (cart)

}
