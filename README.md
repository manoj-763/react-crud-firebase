# React + Vite

CRUD React Firebase Application

This project is a simple CRUD (Create, Read, Update, Delete) application built using React, Firebase, and several modern UI libraries. The app leverages Firebase for backend functionality and is styled with Material-UI (MUI) and Bootstrap.

Features:-

User Authentication: Firebase Authentication for secure login/logout.

Real-time Database: Firebase Firestore for storing and managing tasks.

CRUD Operations: Create, read, update, delete, filter, pending tasks in a user-friendly UI.

Toast Notifications: Instant feedback using react-toastify for user actions.

Responsive Design: Styled with Bootstrap and MUI for a seamless experience across devices.

Technologies Used

Frontend
React: Version 18.3.1 for building user interfaces.
React Router DOM: Version 7.1.0 for navigation.
Bootstrap: CSS framework for responsive design.

Backend
Firebase
Authentication and Authorization
Firestore Database

Utilities
react-toastify: Version 11.0.2 for displaying toast notifications.

Dev Tools
Vite: A fast development build tool.
ESLint: Linting for consistent code quality.

Installation

Clone the repository:

git clone https://github.com/your-username/crud-react-firebase.git

Navigate to the project directory:

cd crud-react-firebase

Install dependencies:

npm install


Start the development server:

npm run dev

Project Structure

crud-react-firebase/
├── public/                # Static files
├── src/
│   ├── assets          
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages (Home, Login, Sign Up.)
│   ├── styles/            # Custom CSS and styling
│   └── main.jsx           # App entry point
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation


