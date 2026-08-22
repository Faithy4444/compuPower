let cart = [];

const addToCart = (product, price) => {

    cart.push({
        product: product,
        price: price,
        quantity: 1
    });

    console.log(cart);
};

const displayCart = () => {

    let cartItems = document.getElementById("cart-items");

    let output = "";

    cart.forEach((item, index) => {

        output += `
            <div class="cart-item">

                <h3>${item.product}</h3>

                <p>R${item.price}</p>

                <p>Quantity: ${item.quantity}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    cartItems.innerHTML = output;
};
