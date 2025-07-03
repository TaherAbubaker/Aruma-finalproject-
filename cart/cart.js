let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    updateSummary();
    return;
  }

  cart.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100">
      <div>
        <h3 style="color: white; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;">${product.name}</h3>
        <p>Price: ${product.price}</p>
        <label>Quantity: 
          <input type="number" min="1" value="${product.quantity || 1}" data-index="${index}" class="quantity-input" />
        </label>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
    container.appendChild(item);
  });

  setupEvents();
  updateSummary();
}

function setupEvents() {
  document.querySelectorAll(".quantity-input").forEach(input => {
    input.addEventListener("change", e => {
      const index = e.target.dataset.index;
      const newQuantity = parseInt(e.target.value);
      cart[index].quantity = newQuantity;
      saveCart();
      updateSummary();
    });
  });

  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });
  });
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateSummary() {
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    const qty = item.quantity || 1;
    totalItems += qty;
    totalPrice += qty * parseFloat(item.price.replace('$', ''));
  });

  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
}

document.getElementById("Clear").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});



document.addEventListener("DOMContentLoaded", renderCart);


