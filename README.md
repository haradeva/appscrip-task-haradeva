# Appscrip Assignment — Product Listing Page (PLP)

A fully responsive Product Listing Page built for the **Appscrip Frontend Assignment** using **Next.js (Pages Router)**.  
This project includes product listing, sorting, filtering, category accordion UI, responsive header/footer, and an internal API proxy for stable SSR rendering on Vercel.

---

## 🚀 Live Demo

🔗 **https://appscrip-task-haradeva.vercel.app/**

---

## 📌 Project Overview

This project implements a modern e-commerce **Product Listing Page (PLP)** with working filters, sorting, mobile responsiveness, and a UI closely matching the provided designs.  
Products are fetched server-side using an internal API to ensure stable deployment on Vercel.

---

## 🛠️ Tech Stack

- **Next.js (Pages Router)**
- **React.js**
- **CSS** (custom global stylesheet)
- **Vercel** for hosting
- **DummyJSON API** (proxied through internal API route)

---

## ✨ Features

### ✅ **1. Server-Side Rendering (SSR)**

Products are fetched using `getServerSideProps`, ensuring fresh data and SEO optimization.

### ✅ **2. Internal API Proxy**

To prevent external API failures during SSR on Vercel, the app uses:

`/pages/api/products.js`

This improves performance and avoids CORS/timeout issues.

### ✅ **3. Filters (Multi-level Accordion)**

Includes filters matching the design:

- Customizable
- Ideal For
- Occasion
- Work
- Fabric
- Segment
- Suitable For
- Raw Materials
- Pattern
- Price Slider

### ✅ **4. Sorting**

Supports:

- Featured
- Price: Low to High
- Price: High to Low

### ✅ **5. Responsive Design**

UI adjusts for:

- Desktop
- Tablet
- Mobile

Includes mobile modal-style filter drawer and mobile slide-in navigation.

### ✅ **6. Redesigned Header & Footer**

Header matches assignment visual style with:

- Logo
- Navigation
- Icons
- Mobile menu
- Sticky top banner

---

## 📦 Folder Structure

```
/components
  Header.js
  Footer.js
  ProductCard.js
  Filters.js

/pages
  index.js
  api/products.js
  _app.js
  _document.js

/public
  /images (icons, logo)

/styles
  globals.css
```

---

## ▶️ Running Locally

### 1. Clone the repository

```
git clone https://github.com/haradeva/appscrip-task-haradeva.git
cd appscrip-task-haradeva
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 🌐 Deployment

Deployed on **Vercel**.  
All SSR API calls are routed through Next.js internal API to avoid fetch failures on the server.

---

## 🔮 Future Enhancements

(Optional items you can implement later)

- Pagination
- Product detail page (PDP)
- Wishlist functionality
- Search
- Filters linked to URL query params

---

## 👤 Author

**G Haradeva Reddy**  
Frontend-Focused Fullstack Developer  
Email: **haradevareddy@gmail.com**
