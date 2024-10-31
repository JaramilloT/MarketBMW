let cart = [];

const cartCount = document.querySelector(".cart-count");
const cartItems = document.getElementById("cart-items");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout");
const totalElement = document.getElementById("total");
const puchaseModal = document.getElementById("puchase-modal");
const closePuchase = document.getElementById("close-puchase");

document.querySelectorAll(".add-cart").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const productCard = button.closest(".S1000RR");
        const productName = productCard.querySelector("h2").textContent;
        const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("Precio: $", ""));
        const product = { name: productName, price: productPrice };
        cart.push(product);
        updateCartCount();
        saveCart();
        updateTotal();
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById("Car-icon").addEventListener("click", function () {
    cartModal.style.display = "flex";
    displayCart();
    updateTotal();
});

closeCart.addEventListener("click", function () {
    cartModal.style.display = "none";
});

checkoutButton.addEventListener("click", function () {
    puchaseModal.style.display = "flex";
    cart = [];
    updateCartCount();
    saveCart();
    updateTotal();
    cartModal.style.display = "none";
});

closePuchase.addEventListener("click", function () {
    puchaseModal.style.display = "none";
});

function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        updateTotal();
    }
}

loadCart();