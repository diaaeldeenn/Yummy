# 🍽️ YUMMY — Modern Front-End Meals Explorer (ES6 + Modular Architecture)

YUMMY is a front-end application built with **ES6 modules**, clean architecture, and a gold × dark visual identity.  
It delivers a smooth exploration experience using multiple search and filtering paths — powered by **TheMealDB API**.  
The project focuses on **structure, consistency, and scalable logic**, not quick-demo patterns.

---

## 🚀 Live Demo
🔗 https://diaaeldeenn.github.io/Yummy/

## 💻 GitHub Repository
🔗 https://github.com/diaaeldeenn/Yummy

---

# ⚡ Overview

YUMMY is designed as a **fully structured front-end system**, not a one-page prototype.  
It follows a predictable workflow with reusable modules, unified async handling, and a UI that feels stable across all screens.

Key principles of the project:

- **Modular ES6 architecture**  
- **Clean separation of concerns**  
- **Predictable async behavior**  
- **Reusable rendering templates**  
- **Consistent UI states**  
- **Stable transitions and DOM flow**

---

# 🧩 Features

### 🔍 Multiple Exploration Paths
- Search by **meal name**
- Search by **first letter**
- Browse by **categories**
- Explore by **areas**
- Filter by **ingredients**
- View complete meal details (instructions, tags, ingredients, and external links)

---

### ⚙️ Consistent Data Flow
- Unified async/await pattern  
- Loader synced directly with API lifecycle  
- Safe fallback handling for empty responses  
- Organized DOM updates with zero layout shift  
- Predictable UX across all screens  

---

### 🧱 Clean Modular Architecture

- project/
- ├── index.html
- ├── README.md
- └── src/
- ├── assets/
- │   ├── css/
- │   │   └── style.css
- │   ├── js/
- │   │   ├── main.js      → navigation & routing
- │   │   ├── api.js       → all API calls
- │   │   ├── display.js   → UI rendering
- │   │   └── contact.js   → contact form + validation
- │   └── images/
- │       ├── logo.png
- │       └── icon.png
- └── libs/
- ├── css/
- │   ├── bootstrap.min.css
- │   └── all.min.css          # Font Awesome
- ├── js/
- │   └── bootstrap.bundle.min.js
- └── webfonts/                # Font Awesome fonts




---

### ✉️ Custom Validation System
- Regex rules for all inputs  
- Real-time feedback (valid/invalid)  
- Submit-button gating  
- Logic separated from UI rendering  
- Clean input-state management  

---

### 🎨 Gold × Dark Visual Identity
- Consistent theme colors  
- Responsive card layout  
- Smooth hover and motion behavior  
- Spacing and visual hierarchy  
- Custom loader synchronized with async requests  

---

### 🔬 Micro-Details That Matter
- Ingredient extraction using dynamic API key patterns  
- Zero inline events (pure JS event handling)  
- Optimized event binding for dynamic DOM nodes  
- Reusable rendering templates  
- Stable containers to avoid reflow  
- Clean, readable naming conventions  

---

# 🛠 Tech Stack
- **HTML5**  
- **CSS3**  
- **Bootstrap 5**  
- **JavaScript (ES6 Modules)**  
- **TheMealDB API**

---

# 📂 How to Run Locally

1️⃣ Clone the repository  
```bash
git clone https://github.com/diaaeldeenn/Yummy.git
```
2️⃣ Navigate to the project folder
```
cd Yummy
```
3️⃣ Open index.html in your browser
No build tools required — the project is fully vanilla.

(Optional) Use Live Server in VS Code for auto-refresh.

---

👨‍💻 Developer

Diaa Eldeen
Front-End Developer
