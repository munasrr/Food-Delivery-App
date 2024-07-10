import React, { useState } from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { clearCart } from "../../slices/cartReducer";
import { Truck } from "lucide-react";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(clearCart());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-background top-0 shadow-sm fixed w-full z-10 dark:bg-background-dark">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-primary font-bold text-4xl dark:text-primary-dark"
        >
          <Truck className="mr-2" size={42} /> {/* Adding the truck icon */}
          Foodify
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-gray-700 font-semibold dark:text-text-dark">
            <Link
              to="/"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
            >
              Home
            </Link>
            <Link
              to="/food-list"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
            >
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <FaShoppingCart
                className="text-primary dark:text-primary-dark"
                size={24}
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            </Link>
            {userInfo ? (
              <div className="relative">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <FaUserCircle
                    size={32}
                    className="border border-primary rounded-full dark:border-primary-dark"
                  />
                  <span>{userInfo?.user?.name}</span>
                  <svg
                    className={`w-5 h-5 fill-current transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.555 7.5h8.889L10 12.5 5.555 7.5z" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute bg-white shadow-lg text-black right-0 mt-2 w-48 rounded-md z-20 dark:bg-background-dark dark:text-text-dark">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-text-dark"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logoutHandler();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-text-dark"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-primary rounded-full text-white px-6 py-2 hover:bg-red-600 transition-colors dark:bg-primary-dark dark:hover:bg-red-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary rounded-full text-white px-6 py-2 hover:bg-red-600 transition-colors dark:bg-primary-dark dark:hover:bg-red-700"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
        <button
          className="md:hidden text-primary focus:outline-none dark:text-primary-dark"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md dark:bg-background-dark">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/food-list"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors dark:hover:text-primary-dark"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link to="/cart" className="relative" onClick={toggleMenu}>
              <FaShoppingCart
                className="text-primary dark:text-primary-dark"
                size={24}
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            </Link>
            {userInfo ? (
              <>
                <Link
                  to="/profile"
                  className="hover:text-primary transition-colors dark:hover:text-primary-dark"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logoutHandler();
                    toggleMenu();
                  }}
                  className="text-left hover:text-primary transition-colors dark:hover:text-primary-dark"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-primary rounded-full text-white px-6 py-2 hover:bg-red-600 transition-colors dark:bg-primary-dark dark:hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary rounded-full text-white px-6 py-2 hover:bg-red-600 transition-colors dark:bg-primary-dark dark:hover:bg-red-700"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
