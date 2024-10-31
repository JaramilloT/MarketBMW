let cart =[];

const cartCount = document.getElementById("cart-count")
const cartItems= document.getElementById("cart-items")
const cartModal = document.getElementById("cart-modal")
const closeCart = document.getElementById("close-cart")

const checkoutButton = document.getElementById("checkout")
const totalElement = document.getElementById("total")
const puchaseModal = document.getElementById("puchase-modal")
const closePuchase = document.getElementById("close-puchase")


document.querySelectorAll(".add-to-cart").forEach((button) => {

    button.addEventListener("click", function (event){
        event.preventDefault()
        const productCard = button.closest(".card-product")
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("$",""))
        const product = {name: productName, price: productPrice};
        cart.push(product)
        updateCartCount();
        saveCart();
        updateTotal();
    });
});


function updateCartCount() {
    cartCount.textContent = cart.length;

};

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))    
};

function displayCart() {
    cartItems.innerHTML = '';
    cart.forEach((item) =>{
        const li =document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });
};

function updateTotal() {
    const total = cart.reduce ((acc, item) => acc + item.price, 0);
    totalElement.textContent= `Total: $${total }`
};