# 🌾 AgroCircle

AgroCircle is a full-stack web application designed to connect farmers directly with buyers through an easy-to-use digital marketplace. The platform enables farmers to showcase their products, buyers to browse agricultural products, and provides a responsive, user-friendly experience.

---

# 🚀 Project Setup Instructions

## Prerequisites

- Node.js (v18 or later)
- npm
- Python 3.10+
- pip

## Clone the Repository

```bash
git clone https://github.com/abhishek-yadav25/AgroCircle.git
cd AgroCircle
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

## Backend Setup

Open another terminal.

```bash
cd AgroCircleBackend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The backend API will run at:

```
http://localhost:8000
```

---

# 🛠 Technology Stack Used

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Material UI
- CSS3

## Backend

- Django
- Django REST Framework

## Database

- SQLite

---

# ✨ Features Implemented

- Responsive Home Page
- About Us Page
- Services Page
- Marketplace with product listing
- Product Details popup (Material UI Dialog)
- Farmer Registration Form
- Buyer Registration Form
- Contact Page
- Responsive Navigation Bar
- Responsive Footer
- API integration using Axios
- Product images loaded from Django backend
- Mobile-friendly responsive design

---

# 📌 Assumptions Made

- Django backend is running locally during development.
- Product data is fetched from the Django REST API.
- User authentication and payment gateway are outside the project scope.
- Images are stored and served by the backend.
- The project is intended as a demonstration of a farmer–buyer marketplace.

---

## 👨‍💻 Author

**Abhishek Yadav**