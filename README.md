# 🍕 QuickBite
**QuickBite** is a comprehensive food ordering and delivery platform developed as the final project for a university MERN Development course. This web application is designed to streamline the process of browsing, ordering, and delivering food, providing an intuitive interface and robust features for users.

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
- **React** ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white): A JavaScript library for building user interfaces.
- **Redux Toolkit** ![Redux](https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white): State management library for managing application state.
- **Tailwind CSS** ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white): Utility-first CSS framework for quickly building custom designs.
- **NextUI** ![NextUI](https://img.shields.io/badge/-NextUI-000000?style=flat-square&logo=next.js&logoColor=white): UI components for React applications.
- **React Icons** ![React Icons](https://img.shields.io/badge/-React%20Icons-61DAFB?style=flat-square&logo=react&logoColor=white): Provides a set of icons for use in React applications.
- **React Helmet** ![React Helmet](https://img.shields.io/badge/-React%20Helmet-61DAFB?style=flat-square&logo=react&logoColor=white): Manages document head tags such as `<title>` and `<meta>` in React applications.
- **Axios** ![Axios](https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white): A promise-based HTTP client for making requests to the backend API.
- **MUI** ![MUI](https://img.shields.io/badge/-MUI-007FFF?style=flat-square&logo=mui&logoColor=white): React components for faster and easier web development.
- **DaisyUI** ![DaisyUI](https://img.shields.io/badge/-DaisyUI-0088CC?style=flat-square&logo=daisyui&logoColor=white): Tailwind CSS components.
- **Emotion** ![Emotion](https://img.shields.io/badge/-Emotion-DB7093?style=flat-square&logo=emotion&logoColor=white): Library designed for writing css styles with JavaScript.
- **React Toastify** ![React Toastify](https://img.shields.io/badge/-React%20Toastify-FF5F6D?style=flat-square&logo=react&logoColor=white): Provides notification messages.

### Backend
- **Node.js** ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white): A JavaScript runtime environment for server-side applications.
- **Express.js** ![Express](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB** ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white): A NoSQL database used for storing user data, food items, orders, and more.
- **Mongoose** ![Mongoose](https://img.shields.io/badge/-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white): A MongoDB object modeling tool designed to work in an asynchronous environment.
- **Resend** ![Resend](https://img.shields.io/badge/-Resend-FF6F61?style=flat-square&logo=resend&logoColor=white): A library used for sending email notifications to users.
- **JWT (JSON Web Tokens)** ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=json-web-tokens&logoColor=white): Used for securely transmitting information between parties as a JSON object.
- **Bcrypt** ![Bcrypt](https://img.shields.io/badge/-Bcrypt-FFCA28?style=flat-square&logo=bcrypt&logoColor=white): A library for hashing passwords to ensure secure storage in the database.
- **Validator** ![Validator](https://img.shields.io/badge/-Validator-0052CC?style=flat-square&logo=validator&logoColor=white): Provides validation functions to validate user inputs and API requests.
- **Multer** ![Multer](https://img.shields.io/badge/-Multer-FF4B4B?style=flat-square&logo=multer&logoColor=white): Middleware for handling `multipart/form-data`, primarily used for uploading files in your applications.
- **CORS (Cross-Origin Resource Sharing)** ![CORS](https://img.shields.io/badge/-CORS-009688?style=flat-square&logo=cors&logoColor=white): Middleware for enabling CORS in your Express.js application.
- **Body-parser** ![Body-parser](https://img.shields.io/badge/-Body--parser-3C873A?style=flat-square&logo=body-parser&logoColor=white): Node.js body parsing middleware.
- **Colors** ![Colors](https://img.shields.io/badge/-Colors-FF5733?style=flat-square&logo=colors&logoColor=white): Get colors in your node.js console.
- **Cookie-parser** ![Cookie-parser](https://img.shields.io/badge/-Cookie--parser-F4B400?style=flat-square&logo=cookie-parser&logoColor=white): Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- **Dotenv** ![Dotenv](https://img.shields.io/badge/-Dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=white): Loads environment variables from a .env file into process.env.
- **Express-async-handler** ![Express-async-handler](https://img.shields.io/badge/-Express--async--handler-4CAF50?style=flat-square&logo=express&logoColor=white): Simple middleware for handling exceptions inside of async express routes.
- **Google-auth-library** ![Google-auth-library](https://img.shields.io/badge/-Google--auth--library-4285F4?style=flat-square&logo=google&logoColor=white): Google APIs Node.js Client.
- **Nodemailer** ![Nodemailer](https://img.shields.io/badge/-Nodemailer-48C9B0?style=flat-square&logo=nodemailer&logoColor=white): Send emails with Node.js.
- **Nodemon** ![Nodemon](https://img.shields.io/badge/-Nodemon-76D7C4?style=flat-square&logo=nodemon&logoColor=white): Simple monitor script for use during development of a node.js app.
- **Stripe** ![Stripe](https://img.shields.io/badge/-Stripe-6772E5?style=flat-square&logo=stripe&logoColor=white): Node.js library for the Stripe API.
- **Swagger-jsdoc** ![Swagger-jsdoc](https://img.shields.io/badge/-Swagger--jsdoc-85EA2D?style=flat-square&logo=swagger&logoColor=white): Generates swagger doc based on JSDoc.
- **Swagger-ui-express** ![Swagger-ui-express](https://img.shields.io/badge/-Swagger--ui--express-85EA2D?style=flat-square&logo=swagger&logoColor=white): Creates a Swagger UI page using an OpenAPI Specification.

## Setup Instructions 🛠️

### Clone the Repository

```sh
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```


### Install Dependencies
   ### Frontend
   
```sh
cd frontend
npm install
```

### Backend
 ```sh
cd ../backend
npm install
```

### Set Up Environment Variables
Create .env files in both the frontend and backend directories with appropriate configuration variables like API URLs, database connection strings, JWT secrets, Cloudinary credentials, and email service credentials.

### Run the Development Servers
  ### Frontend Server
  ```sh
cd frontend
npm run dev
 ```
 ### Backend Server
   ```sh
cd ../backend
npm start
 ```
### Access Food Delivery App
  Open your browser and navigate to http://localhost:3000 to access the Food Delivery App.

### Contributing 🤝
  We welcome contributions from the community. If you have suggestions, find any issues, or want to add new features, please open an issue or submit a pull request on our GitHub repository.

### License 📄
  This project is licensed under the MIT License. See the LICENSE file for details.

### Thank you for checking out Food Delivery App! We hope you find it useful and enjoyable to use. 🍽️
  ```css
Make sure you copy and paste the entire content to avoid missing any part of the markdown syntax. This should ensure that the code blocks and other markdown elements render correctly in your README file.
  ```
    
