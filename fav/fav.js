let fav = JSON.parse(localStorage.getItem("fav")) || [];

  function renderCart() {
    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    if (fav.length === 0) {
      container.innerHTML = `<p style="wfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;">Your fav is empty.</p>`;
      updateSummary();
      return;
    }

    fav.forEach((product, index) => {
      const item = document.createElement("div");
      item.className = "cart-item";
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
          <button class="add-to-cart" data-product-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-cart" viewBox="0 0 16 16">
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
          </button>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      container.appendChild(item);
    });

    setupAddToCartButtons();
    setupRemoveButtons();
    updateSummary();
  }

  function saveFav() {
    localStorage.setItem("fav", JSON.stringify(fav));
  }

  function setupRemoveButtons() {
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const index = e.target.dataset.index;
        fav.splice(index, 1);
        saveFav();
        renderCart();
      });
    });
  }

  function setupAddToCartButtons() {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
      button.addEventListener("click", (e) => {
        const productId = e.currentTarget.getAttribute("data-product-id");
        addToCart(productId);
      });
    });
  }

  function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.some(item => item.id === product.id)) {
      showToast(`"${product.name}" is already in the cart!`);
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    showToast(`Added "${product.name}" to cart!`);
  }

  function updateSummary() {
    let totalItems = fav.length;
    let totalPrice = 0;

    fav.forEach(item => {
      const price = parseFloat(item.price.replace('$', ''));
      totalPrice += price;
    });

    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-price").textContent = "$" + totalPrice.toFixed(2);
  }

  document.getElementById("Clear").addEventListener("click", () => {
    fav = [];
    saveFav();
    renderCart();
  });

  document.addEventListener("DOMContentLoaded", renderCart);