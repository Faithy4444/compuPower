// SHOPPING CART

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD PRODUCT TO CART
const addToCart = (product, price) => {
  const existingProduct = cart.find((item) => item.product === product);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({
      product: product,
      price: price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " has been added to your cart!");
  displayCart();
};

// DISPLAY CART

const displayCart = () => {
  const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
  if (!cartItems) {
    return;
  }

  cartItems.innerHTML = "";

  // If the cart is empty
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="cart-empty">
                <h3>Your cart is empty 🛒</h3>
                <p>Go to the Products page to add something.</p>
            </div>
        `;

    cartTotal.textContent = "0";

    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
      total += itemTotal;
    
    cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <h3>${item.product}</h3>

                    <p>
                        Price: R${item.price.toLocaleString()}
                    </p>

                    <p>
                        Quantity: ${item.quantity}
                    </p>
                </div>


                <div class="cart-controls">

                    <button
                        onclick="changeQuantity(${index}, -1)">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${index}, 1)">
                        +
                    </button>

                    <button
                        class="clear-btn"
                        onclick="removeFromCart(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
  });


  cartTotal.textContent = total.toLocaleString();
};

// CHANGE QUANTITY

const changeQuantity = (index, amount) => {
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

// REMOVE PRODUCT

const removeFromCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
};

// CLEAR CART

const clearCart = () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
};

// CHECKOUT

const checkout = () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");

    return;
  }

  alert(
    "Thank you for shopping with GameTech! " + "Your order has been received.",
  );

  cart = [];

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
};

// CONTACT FORM

const sendMessage = (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  event.target.reset();
};

// LOAD CART WHEN PAGE OPENs
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
});
