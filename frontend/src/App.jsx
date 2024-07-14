import React, { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/pages/Header";

// Lazy loading components
const LoginForm = lazy(() => import("./components/screens/LoginForm"));
const RegisterForm = lazy(() => import("./components/screens/RegisterForm"));
const Home = lazy(() => import("./components/pages/Home"));
const ProfileScreen = lazy(() => import("./components/screens/ProfileScreen"));
const UsersList = lazy(() => import("./components/adminRoles/UsersList"));
const ForgotPassword = lazy(() =>
  import("./components/screens/ForgetPassword")
);
const FoodList = lazy(() => import("./components/screens/FoodList"));
const Cart = lazy(() => import("./components/screens/Cart"));
const ContactForm = lazy(() => import("./components/pages/ContactForm"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const VerifyPayment = lazy(() => import("./components/screens/VerifyPayment"));
const OrderFailure = lazy(() => import("./components/screens/OrderFailure"));
const OrdersList = lazy(() => import("./components/adminRoles/OrdersList"));
const OrderSuccess = lazy(() => import("./components/screens/OrderSuccess"));
const AdminProfile = lazy(() => import("./components/adminRoles/AdminCredentials"));
const MenuItems = lazy(() => import("./components/adminRoles/MenuItems"));


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/menu-items" element={<MenuItems />} />
            <Route path="/admin/users" element={<UsersList />} />
            <Route path="/admin/orders" element={<OrdersList />} />
            <Route path="/verify" element={<VerifyPayment />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/order-failure" element={<OrderFailure />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/food-list" element={<FoodList />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
