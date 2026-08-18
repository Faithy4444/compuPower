
let cart = [];

const addToCart = (product, price) => {
    let cartItems = document.getElementById("cart-items");
    cart.push({ product, price });
    let output = "";

    cart.forEach(item => {
        output += `
            <div class="cart-item">
                <h3>${item.product}</h3>
                <p>R${item.price}</p>
            </div>
        `;
    });

    cartItems.innerHTML = output;

    return cart;

}
