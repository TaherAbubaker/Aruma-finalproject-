
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  cart.forEach(item => {
    const quantity = item.quantity || 1;
    totalPrice += quantity * parseFloat(item.price.replace('$', ''));
  });

  const totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
  }

  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      showToast("✅ Order sent successfully. We will contact you soon to deliver your order.");

      
      localStorage.removeItem("cart");

      checkoutForm.reset();
      

      if (totalPriceElement) {
        totalPriceElement.textContent = "$0.00";
      }
      
      setTimeout(() => {
      window.location.href = "index.html";
    }, 1000); 
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function showToast(message) {
    const toast = document.getElementById("toast");
    const toastBody = toast.querySelector(".toast-body");

    toastBody.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});
