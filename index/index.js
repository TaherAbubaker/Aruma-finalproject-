const categories = [
  { id: "all", name: "All" },
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "dining", name: "Dining" },
  { id: "office", name: "Office" },
  { id: "outdoor", name: "Outdoor" }
];

const products = [
  {
    id: 1,
    name: "Cozy Sofa",
    category: "living-room",
    image: "img\\livingroom\\pngtree-contemporary-linen-sofa-on-white-studio-background-a-png-image_10294836.png",
    description: "Cozy Sofa is a comfortable and stylish sofa that is perfect for any living room.",
    rating: 4,
    price: "$499"
  },
  {
    id: 2,
    name: "Classy Sofa",
    category: "living-room",
    image: "img\\livingroom\\image-removebg-preview.png",
    description: "Classy Sofa is a stylish and comfortable sofa that is perfect for any living room.",
    rating: 3,
    price: "$199"
  },
  {
    id: 3,
    name: "Blue Modern Sofa",
    category: "living-room",
    image: "img\\livingroom\\chic-blue-sofa-with-tufted-backrest-and-plush-cushions-stylishly-perched-on-slender-wooden-legs-on-transparent-background-cut-out-furniture-front-view-ai-generated-png.png",
    description: "Modern Sofa is a stylish and comfortable sofa that is perfect for any living room.",
    rating: 5,
    price: "$699"
  },
  {
    id: 4,
    name: "coffe table",
    category: "living-room",
    image: "img\\livingroom\\image-removebg-preview (2).png",
    description: "Perfect for any living room.",
    rating: 2,
    price: "$899"
  },
  {
    id: 5,
    name: "OLED TV",
    category: "living-room",
    image: "img\\livingroom\\pngtree-led-tv-television-screen-vector-png-image_6673700.png",
    description: "Smart TV is a perfect addition to any living room.",
    rating: 4,
    price: "$799"
  },
  {
    id: 6,
    name: "King Size Bed",
    category: "bedroom",
    image: "img\\bedroomstuff\\pngimg.com - bed_PNG17401.png",
    description: "Perfect for a late night sleep.",
    rating: 5,
    price: "$8099"
  },
  {
    id: 7,
    name: "Cozy Bed",
    category: "bedroom",
    image: "img\\bedroomstuff\\pngimg.com - bed_PNG17385.png",
    description: "Your new favorite bed.",
    rating: 4,
    price: "$619"
  },
  {
    id: 8,
    name: "King Dresser",
    category: "bedroom",
    image: "img\\bedroomstuff\\pngimg.com - dresser_PNG168.png",
    description: "Not So Perfect for any Bedroom.",
    rating: 2,
    price: "$699"
  },
  {
    id: 9,
    name: "Fancy Mirror",
    category: "bedroom",
    image: "img\\bedroomstuff\\pngtree-realistic-round-mirror-with-metal-frame-png-image_10202910.png",
    description: "What you see is what you get.",
    rating: 3,
    price: "$99"
  },
  {
    id: 10,
    name: "Royal Mirror",
    category: "bedroom",
    image: "img\\bedroomstuff\\pngtree-round-golden-mirror-frame-png-image_10200634.png",
    description: "You cant efford that.",
    rating: 5,
    price: "$9999"
    
  },
  {
    id: 11,
    name: "Modern Dining Table",
    category: "dining",
    image: "img\\diningroom\\image-removebg-preview (3).png",
    description: "as modern as it gets.",
    rating: 4,
    price: "$99"
    
  },
  {
    id: 12,
    name: "Dark Dining Table",
    category: "dining",
    image: "img\\diningroom\\top-view-dining-table-dark-colored-png-3.png",
    description: "just the right amount of darkness.",
    rating: 8,
    price: "$89"
    
  },
  {
    id: 13,
    name: "Traditional Dining Table",
    category: "dining",
    image: "img\\diningroom\\b10026dd4fe55638cea97047ad322aef-removebg-preview.png",
    description: "just for your simple needs.",
    rating: 2,
    price: "$49"
    
  },
  {
    id: 14,
    name: "Coffee House Dining Table",
    category: "dining",
    image: "img\\diningroom\\image-removebg-preview (4).png",
    description: "The best place to have coffee.",
    rating: 5,
    price: "$99"
    
  },
  {
    id: 15,
    name: "Dining Cabinet",
    category: "dining",
    image: "img\\diningroom\\pixelcut-7_33-removebg-preview.png",
    description: "Just for your dining needs.",
    rating: 5,
    price: "$1999"
    
  },
  {
    id: 16,
    name: "Dark Office Desk",
    category: "office",
    image: "img\\office\\desk-png-22.png",
    description: "How it should be.",
    rating: 5,
    price: "$299"
    
  },
  {
    id: 17,
    name: "Fancy Office Desk",
    category: "office",
    image: "img\\office\\traditional-desk-DxPevq4-600-removebg-preview.png",
    description: "Just for the right people.",
    rating: 6,
    price: "$2999"
    
  },
  {
    id: 18,
    name: "Large Office Desk",
    category: "office",
    image: "img\\office\\office-desk-d7yY7QF-600-removebg-preview.png",
    description: "More space for you.",
    rating: 5,
    price: "$899"
    
  },
  {
    id: 19,
    name: "Lazy Swivel Chair",
    category: "office",
    image: "img\\office\\office-desk-chairs-human-factors-and-ergonomics-swivel-chair-png-favpng-8MbCxVMQSB3eKgz8Zi6JBaAhV-removebg-preview.png",
    description: "Not for the lazy.",
    rating: 2,
    price: "$39"
    
  },
  {
    id: 20,
    name: "Fancy Office Chair",
    category: "office",
    image: "img\\office\\png-clipart-table-office-chair-furniture-couch-chairs-room-office-thumbnail-removebg-preview.png",
    description: "As fancy as it gets.",
    rating: 4,
    price: "$999"
    
  },
  {
    id: 21,
    name: "Gray Garden Set",
    category: "outdoor",
    image: "img\\outdoor\\garden-furniture-set-patio-J3eoP22-600-removebg-preview.png",
    description: "Experts say it's the best.",
    rating: 7,
    price: "$79"
    
  },
  {
    id: 22,
    name: "Modren Outdoor Set",
    category: "outdoor",
    image: "img\\outdoor\\isometric-table-set-perspective-3d-render-png.png",
    description: "What you need for your backyard.",
    rating: 4,
    price: "$999"
    
  },
  {
    id: 23,
    name: "Outdoor Dining Set",
    category: "outdoor",
    image: "img\\outdoor\\pngtree-modern-cottage-garden-furniture-outdoor-decor-png-image_13304994.png",
    description: "As fancy as it gets.",
    rating: 4,
    price: "$99"
    
  },
  {
    id: 24,
    name: "French Outdoor Set",
    category: "outdoor",
    image: "img\\outdoor\\pngtree-table-and-chair-with-umbrella-outdoor-dining-chairs-orange-isolated-on-png-image_11734896.png",
    description: "As french as it gets.",
    rating: 1,
    price: "$19"
    
  },
  {
    id: 25,
    name: "Plastic Outdoor plant",
    category: "outdoor",
    image: "img\\outdoor\\standing-planter-ZR6Jxw4-600-removebg-preview.png",
    description: "As Plastic as it gets.",
    rating: 4,
    price: "$999"
    
  },
  {
    id: 26,
    name: "Real Outdoor plant",
    category: "outdoor",
    image: "img\\outdoor\\image-removebg-preview (5).png",
    description: "You can't get any realer than this.",
    rating: 5,
    price: "$49"
    
  }
  
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const fav = JSON.parse(localStorage.getItem("fav")) || [];


function renderStars(count) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${i < count ? 'white' : 'gray'}" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`;
  }
  return stars;
}

function renderCategories() {
  const categoryContainer = document.querySelector(".Categorie");
  categoryContainer.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.setAttribute("data-category", cat.id);
    categoryContainer.appendChild(btn);
  });
}

function renderProducts(filterCategory = "all") {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";
  const filteredProducts = filterCategory === "all"
    ? products
    : products.filter(p => p.category === filterCategory);
  filteredProducts.forEach(prod => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-category", prod.category);
    productCard.innerHTML = `
      <a href="product.html?id=${prod.id}" class="product-link">
        <h3 style="  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;">${prod.name}</h3>
        <img class="imgg" loading="lazy" src="${prod.image}" alt="${prod.name}" />
        <p>${prod.description}</p>
        <div class="rating">${renderStars(prod.rating)}</div>
        <p class="price">${prod.price}</p>
      </a>
      <button class="add-to-cart" data-product-id="${prod.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </button>
      <button class="add-to-fav" data-product-id="${prod.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
        </svg>
      </button>
    `;
    productGrid.appendChild(productCard);
  });
  setupAddToCartButtons();
  setupAddToFavButtons();
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

function setupAddToFavButtons() {
  const buttons = document.querySelectorAll(".add-to-fav");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const productId = e.currentTarget.getAttribute("data-product-id");
      addToFav(productId);
    });
  });
}

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
}



function addToFav(productId) {
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  
  if (fav.some(item => item.id === product.id)) {
    showToast(`"${product.name}" is already in favorites!`);
    return;
  }

  fav.push(product);
  localStorage.setItem("fav", JSON.stringify(fav));

  showToast(`Added "${product.name}" to fav!`);
}


function setupCategoryFiltering() {
  const categoryContainer = document.querySelector(".Categorie");
  categoryContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const selectedCategory = e.target.getAttribute("data-category");
      renderProducts(selectedCategory);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts();
  setupCategoryFiltering();
});


/*whallahi this was harder that it looks 😢😢 */

let subscribeButton = document.getElementById("submitSubscribe");
subscribeButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  const emailInput = document.querySelector("input[type='email']");
  const email = emailInput.value.trim();

  if (email) {
    showToast(`Thanks for subsicribing ${email}!`);
    emailInput.value = "";
  } else {
    showToast("Please enter a valid email address.");
  }
  
});

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastBody = toast.querySelector(".toast-body");

  toastBody.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); 
}
