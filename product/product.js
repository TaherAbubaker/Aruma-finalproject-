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

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

function renderStars(count) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    stars += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${i < count ? 'white' : 'gray'}" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`;
  }
  return stars;
  //هاض احسن اشي اكتشفتو + بقدر اكتب عربي 
}

function renderProductDetails(product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-rating").innerHTML = renderStars(product.rating);
}

function addToCart(product) {
  if (cart.some(item => item.id === product.id)) {
    showToast(`${product.name} is already in the cart.`);
    return;
  }
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${product.name} added to cart!`);
  document.getElementById("add-to-cart").disabled = true;
}

function addToFav(product) {
  if (fav.some(item => item.id === product.id)) {
    showToast(`${product.name} is already in favorites.`);
    return;
  }
  fav.push(product);
  localStorage.setItem("fav", JSON.stringify(fav));
  showToast(`${product.name} added to favorites!`);
  document.getElementById("add-to-fav").disabled = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = getProductById(id);

  if (!product) {
    document.getElementById("product-container").innerHTML = "<p>Product not found.</p>";
    return;
  }

  renderProductDetails(product);

  document.getElementById("add-to-cart").addEventListener("click", () => {
    addToCart(product);
  });

  document.getElementById("add-to-fav").addEventListener("click", () => {
    addToFav(product);
  });
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