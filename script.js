let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

document.getElementById("cart-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("cart").classList.toggle("hidden");
});

document.getElementById("burger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});


const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart');

// Mostrar/Ocultar el carrito
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.toggle('open');
  overlay.classList.toggle('show');
  renderCart();
});

// Cerrar carrito haciendo clic fuera
overlay.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('show');
});

// Añadir producto al carrito (reutilizable)
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  renderCart();
}

// Renderizar productos en el sidebar
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotal.textContent = total;
}

// Contador del ícono del carrito
function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

// Vaciar carrito
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCartCount();
  renderCart();
});

