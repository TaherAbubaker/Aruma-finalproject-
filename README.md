# 🪑 Aruma — The Furniture Experience

Welcome to **Aruma**, an interactive and elegant front-end furniture website that brings a modern online store experience to life. Designed with passion, flair, and pure HTML/CSS/JS magic — Aruma lets users explore, favorite, and shop for furniture in a clean, functional, and stylish UI.

---

## 🌐 Pages Overview

| Page        | Description |
|-------------|-------------|
| 🏠 **Index (Home)** | Browse all products with live category filtering, beautiful product cards, and quick access to details. |
| 🛋️ **Product Page** | A dynamic page that shows full details of the product you clicked on — image, price, description, rating, etc. |
| 💖 **Favorites** | View your favorite products saved in `localStorage`. Includes ability to remove items and see a summary. |
| 🛒 **Cart** | Your selected items ready for checkout. Edit quantity, remove products, and view your total cost. |
| 💳 **Checkout** | A simple and sleek checkout page for completing your order, complete with form validation and loader. |
| ℹ️ **About Us** | Who we are, why we do it — clean and elegant about section. |
| ✉️ **Contact** | Let users reach out to you! Includes a contact form and styling that matches the full website. |
| 🔐 **Login** | User login form with beautiful styling and toast messages. |
| 🆕 **Sign Up** | New user? Sign up with a well-designed form page. |

---

## ✨ Key Features

- ✅ **Category Filtering** — Easily switch between furniture types: Bedroom, Living Room, Outdoor, etc.
- 💾 **Local Storage Integration** — Cart and Favorites are saved even if you refresh or close the browser.
- ❤️ **Add to Favorites** — Click the heart icon to save a product you like.
- 🛍️ **Add to Cart** — One click and the product is added, with automatic feedback.
- 🧾 **Dynamic Product Page** — Product details are loaded based on the ID passed in the URL.
- 🌟 **Star Rating System** — Products have a visual star rating (SVG based).
- 🧹 **Cart Clear Option** — Quickly empty the cart with one click.
- 📱 **Responsive Design** — Looks clean on desktop and mobile.
- 🍞 **Bootstrap Toast Alerts** — Feedback messages like “Added to cart!” or “Already in favorites” pop up smoothly.
- 🖼️ **Optimized Images** — All assets are compressed and lazy-loaded for speed.
- 📧 **Email Subscribe** — Subscribe form with feedback for user engagement.

---

## 🛠️ Built With

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Bootstrap (only for toast)**

---

## 📂 Project Structure

```bash
📁 Aruma/
├── index.html
├── product.html
├── cart.html
├── fav.html
├── checkout.html
├── contact.html
├── about.html
├── login.html
├── signup.html
├── index/
│   └── index.js, index.css, indexsidebar.js
├── product/
│   └── product.js, product.css
├── cart/
│   └── cart.js, cart.css
├── fav/
│   └── fav.js, fav.css
├── Checkout/
│   └── checkout.js, checkout.css
├── aboutus/
│   └── about.css
├── contact/
│   └── contact.css
├── login/
│   └── login.css
├── img/
│   └── (all your optimized images, categorized)


💡 Future Improvements:
🧠 Add backend support (Node.js or Firebase)
🧾 Store user sessions with real authentication
🛍️ Checkout with real payment gateways
🎨 Theme toggler (dark/light mode)
🗂️ Pagination for products

🚀 Live Demo: https://arumabytaher.netlify.app/
