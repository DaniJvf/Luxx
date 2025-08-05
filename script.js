let cart = [];

const cartModal = document.getElementById('cart');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const clearCartBtn = document.getElementById('clear-cart');
const cartBtn = document.getElementById('cart-btn');
const closeBtn = document.querySelector('.close-btn');

// Agregar producto al carrito
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  renderCart();
  cartModal.classList.add('active');
  overlay.classList.add('show');
  overlay.classList.remove('hidden');
}

// Renderizar productos en el carrito
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `${item.name} - $${item.price}`;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotal.textContent = total;
}

// Actualizar contador
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Vaciar carrito
clearCartBtn.addEventListener('click', () => {
  cart = [];
  updateCartCount();
  renderCart();
});

// Mostrar/Ocultar carrito modal
cartBtn.addEventListener('click', () => {
  cartModal.classList.toggle('active');
  overlay.classList.toggle('show');
});

// Cerrar carrito al tocar el fondo
overlay.addEventListener('click', () => {
  cartModal.classList.remove('active');
  overlay.classList.remove('show');
});

// Botón de cerrar (la X)
closeBtn.addEventListener('click', () => {
  cartModal.classList.remove('active');
  overlay.classList.remove('show');
});

// Menú hamburguesa
document.getElementById("burger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Capturamos todos los botones con la clase "add-to-cart"
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    const product = { name, price };
    addToCart(product);
  });
});
