# 📚 AI-Powered Math Tutor with AR Learning

A full-stack MVP (Minimum Viable Product) that leverages AI, Graph Plotting, and Augmented Reality to deliver interactive and accessible math education — built to align with **UN SDG 4: Quality Education**.

---

## 🚀 Overview

In the digital age, many students still lack access to personalized, engaging learning experiences. This platform addresses that by combining:

- 🤖 AI-driven Math Tutoring  
- 📈 Real-time Graph Plotting  
- 🧠 AR-Powered Math Concept Visualization  

Built during a high-stakes hackathon to provide a **proof-of-concept** for transforming education using scalable tech.

---

## 🔧 Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React.js, Axios      |
| Backend   | Node.js, Express     |
| Database  | MongoDB + Mongoose   |
| AI/Graph  | MathJS, QuickChart API (or custom plotting logic) |
| AR        | Unity + WebAR (external module or mobile scan)    |

---

## 🧩 Features (MVP)

### 1. 🔢 AI Math Solver + Graph Plotter
- Users input math equations
- Backend solves them and returns graph images
- Real-time rendering for better understanding

### 2. 🧊 AR-Based Learning
- Visualize math shapes and graphs in Augmented Reality
- Enhances conceptual clarity through 3D interaction

---

## 🗂️ Project Structure

root/ ├── frontend/ # React app │ ├── components/ │ ├── pages/ │ └── App.js │ ├── backend/ # Node.js + Express │ ├── controllers/ │ ├── routes/ │ ├── models/ │ ├── config/ │ └── server.js

yaml
Copy
Edit

---

## ⚙️ How to Run

### 1️⃣ Backend Setup
cd mathtutor_backend

npm install

node server.js

Server runs on http://localhost:5000

### 2️⃣ Frontend Setup

cd mathtutor_frontend

npm install

npm start

App runs on http://localhost:3000

📦 API Endpoint
POST /graph

Body: { "equation": "x^2 + 2x + 1" }

Returns: { "image": "<base64-encoded PNG>" }

## 🎯 Future Scope
📚 Personalized learning dashboard

📱 Progressive Web App (PWA) for mobile

🌍 Multilingual support

📶 Offline-first experience for low-connectivity regions

## 🏁 License
MIT License – use freely, contribute collaboratively, and build forward 🚀

## 🌐 Aligned with UN SDG 4: Quality Education
“Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.”
