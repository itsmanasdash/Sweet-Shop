# Sweet-Shop


A full-stack web application with **React (Vite) frontend**, **Node.js backend**, **Prisma ORM**, and **PostgreSQL database**.

## Project Structure

The project is organized into two main directories:

-   `frontend/`: Contains the vite.js frontend application.
-   `backend/`: Contains the Node.js backend server with Prisma ORM.

## 📖 Project Explanation

Sweet-Shop is an online store application built as a full-stack project.  
- The **frontend** is built with **React + Vite + TypeScript**, styled with **TailwindCSS**, and uses **lucide-react** for icons.  
- The **backend** is built with **Node.js + Express**, featuring **JWT authentication with cookies**.  
- **Prisma ORM** is used to interact with a **PostgreSQL** database for structured and reliable data storage.  
- **Zod** is used for validation, **bcrypt** for password hashing, and **axios** for API calls.  

## 📦 Tech Stack

- **Frontend:** React (Vite) + TypeScript  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  
- **ORM:** Prisma  
- **Authentication:** JWT + Cookies + cookie-parser  
- **Validation:** Zod  
- **Security:** bcrypt (password hashing)  
- **HTTP Requests:** axios  
- **Styling:** TailwindCSS  
- **Icons:** lucide-react  

## Prerequisites

Before you begin, ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [npm](https://www.npmjs.com/) (Node Package Manager)
-   A database (e.g., PostgreSQL, MySQL, SQLite) for the backend.

## Getting Started

Follow these steps to get the project set up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/itsmanasdash/Sweet-Shop
```

```bash
cd sweet-shop
cd backend
```
### Install dependencies
```bash
npm install
```
### Create a .env file based on the .env.example file
```bash
cp .env.example .env
```
### Generate Prisma Client
```bash
npx prisma generate
```
### Start the development server 
```bash
npm run dev
```
### Open http://localhost:8000 in your browser to view the application    
```bash
Setup the Frontend
cd ../frontend
```
### Install dependencies
```bash
npm install
```
### Start the development server 
```bash
npm run dev
```


#🤖 My AI Usage

For this project, I leveraged AI tools to accelerate development and debugging:

Claude AI:

Used to generate the initial frontend skeleton and UI components in Svelte.

Helped bootstrap layouts and structure for the project quickly.

ChatGPT (OpenAI GPT-5):

Assisted in solving errors, debugging backend issues, and refining Prisma/Postgres integration.

Helped polish the README.md and improve documentation clarity.

Reflection

Using AI tools made my workflow significantly more efficient:

Faster prototyping: Claude helped me quickly set up a functional UI skeleton.

Error resolution: ChatGPT guided me through debugging issues that would have otherwise taken longer to research.

Documentation: ChatGPT helped create structured and professional documentation.

However, I made sure to review, understand, and modify all AI-generated code before committing it, ensuring I stayed in control of the project’s logic and quality. AI acted as a pair programmer/assistant, not as a replacement for understanding.







<img width="1427" height="819" alt="Screenshot 2025-09-26 at 5 44 59 PM" src="https://github.com/user-attachments/assets/ba17e6d9-f492-4782-8612-9234af4040e8" />
<img width="1424" height="820" alt="Screenshot 2025-09-26 at 5 24 12 PM" src="https://github.com/user-attachments/assets/7e38562e-6a5d-4626-8988-750259a5766c" />
<img width="1425" height="817" alt="Screenshot 2025-09-26 at 5 25 39 PM" src="https://github.com/user-attachments/assets/2b9a2cfa-4819-4ccf-a0ed-f33325dd9aef" />
<img width="1422" height="819" alt="Screenshot 2025-09-26 at 5 24 01 PM" src="https://github.com/user-attachments/assets/e50fc5d9-384a-4769-ab45-c4941b17c30e" />
<img width="1424" height="821" alt="Screenshot 2025-09-26 at 5 24 19 PM" src="https://github.com/user-attachments/assets/a991ca37-dbad-4924-8d09-f800b0713042" />
<img width="1423" height="756" alt="Screenshot 2025-09-26 at 5 24 36 PM" src="https://github.com/user-attachments/assets/54dedd1b-6afc-44a3-9dab-c7513ac546bb" />
<img width="1428" height="820" alt="Screenshot 2025-09-26 at 5 23 49 PM" src="https://github.com/user-attachments/assets/4a467fb1-39b3-4e9d-9c58-cffebe01881b" />
<img width="1440" height="819" alt="Screenshot 2025-09-26 at 5 23 39 PM" src="https://github.com/user-attachments/assets/e2e4d2c0-16e5-43f0-853d-e4fe57e5cb8b" />
