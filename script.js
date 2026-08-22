let cart = [];

const addToCart = (product, price) => {

    cart.push({
        product: product,
        price: price,
        quantity: 1
    });

    console.log(cart);
};
