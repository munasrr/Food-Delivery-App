# 🍕 Food Delivery App

**Food Delivery App** is a comprehensive food ordering and delivery platform developed as the final project for a university MERN Development course. This web application is designed to streamline the process of browsing, ordering, and delivering food, providing an intuitive interface and robust features for users.

## Features 🚀

### User Authentication 🔐
- **Sign Up / Login**: Secure user registration and authentication using JWT.
- **User Roles**: Different user roles including customers, restaurant owners, and administrators.

### Food Management 🍔
- **Browse Menus**: Customers can browse menus from various restaurants.
- **Add/Edit/Delete Food Items**: Restaurant owners can manage their food items.
- **Search Functionality**: Easily find food items or restaurants.

### Order Management 🛒
- **Place Orders**: Seamless ordering process with multiple payment options.
- **Order History**: View past orders and their statuses.
- **Real-time Order Tracking**: Track orders in real-time from preparation to delivery.

### Admin Panel 🛠️
- **User Management**: Admins can view and manage all users, assign roles, and handle user-related issues.
- **Restaurant Approval**: Admins can approve or reject restaurant registrations.
- **Analytics Dashboard**: View analytics and reports on user activity, orders, and revenue.

### Notifications 🔔
- **Order Updates**: Real-time notifications for order status updates.
- **Promotional Notifications**: Send promotional messages to users.

### User Dashboard 📊
- **Profile Management**: Users can update their personal information and profile pictures.
- **Order Management**: View and manage current and past orders.
- **Favorites**: Save favorite dishes and restaurants for easy access.

## Technologies Used 🛠️

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for managing application state.
- **Tailwind CSS**: Utility-first CSS framework for quickly building custom designs.
- **NextUI**: UI components for React applications.
- **React Icons**: Provides a set of icons for use in React applications.
- **React Helmet**: Manages document head tags such as `<title>` and `<meta>` in React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend API.

### Backend
- **Node.js**: A JavaScript runtime environment for server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database used for storing user data, food items, orders, and more.
- **Prisma**: A modern database toolkit for Node.js and TypeScript, providing an interface for querying the database.
- **Resend**: A library used for sending email notifications to users.
- **JWT (JSON Web Tokens)**: Used for securely transmitting information between parties as a JSON object.
- **Bcrypt**: A library for hashing passwords to ensure secure storage in the database.
- **Validator**: Provides validation functions to validate user inputs and API requests.
- **Cloudinary**: Cloud-based image and video management service for uploading, storing, and serving images in your applications.
- **CORS (Cross-Origin Resource Sharing)**: Middleware for enabling CORS in your Express.js application.

## Setup Instructions 🛠️

### Clone the Repository

```sh
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
Install Dependencies
Frontend
sh
Copy code
cd frontend
npm install
Backend
sh
Copy code
cd ../backend
npm install
Set Up Environment Variables
Create .env files in both the frontend and backend directories with appropriate configuration variables like API URLs, database connection strings, JWT secrets, Cloudinary credentials, and email service credentials.

Run the Development Servers
Frontend Server
sh
Copy code
cd frontend
npm run dev
Backend Server
sh
Copy code
cd ../backend
npm start
Access Food Delivery App
Open your browser and navigate to http://localhost:3000 to access the Food Delivery App.

Contributing 🤝
We welcome contributions from the community. If you have suggestions, find any issues, or want to add new features, please open an issue or submit a pull request on our GitHub repository.

License 📄
This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for checking out Food Delivery App! We hope you find it useful and enjoyable to use. 🍽️

css
Copy code

This README is designed to be engaging, easy to read, and informative, with a mix of emojis to add a modern touch. Feel free to adjust the content to fit your project's specific details and requirements.