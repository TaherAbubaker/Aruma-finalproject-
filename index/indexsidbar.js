const offcanvasBody = document.querySelector(".offcanvas-body");

function renderCartPreview() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  offcanvasBody.innerHTML = ""; 

  if (cartItems.length === 0) {
    offcanvasBody.innerHTML = "<p>There are no items in cart.</p>";
    return;
  }

  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-preview-item");
    div.innerHTML = `
      <div style="color:white; display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;">
        <div>
          <strong>${item.name}</strong><br>
          <span>${item.price}</span>
        </div>
      </div>
    `;
    offcanvasBody.appendChild(div);
  });

  const viewFullCartBtn = document.createElement("a");
  viewFullCartBtn.href = "cart.html";
  viewFullCartBtn.textContent = "Show Full Cart";
  viewFullCartBtn.classList.add("btn", "btn-light", "mt-3", "w-100");

  offcanvasBody.appendChild(viewFullCartBtn);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartPreview();
});


function addToCart(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  if (cart.some(item => item.id === product.id)) {
    showToast(`"${product.name}" is already in the cart!`);
    return;
  }

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  showToast(`Added "${product.name}" to cart!`);
  renderCartPreview(); 
}
