import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import toast from "react-hot-toast";
import { LogIn } from "lucide-react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }

    // Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" }
    );

    window.google.accounts.id.prompt();
  }, [navigate, userInfo]);

  const handleGoogleLogin = async (response) => {
    try {
      const res = await fetch("/api/users/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenId: response.credential }),
      });

      const data = await res.json();
      if (data.success) {
        dispatch(setCredentials(data));
        navigate("/");
        toast.success("Logged in with Google!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Google login failed!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      console.log(res);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-background rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-red-600 dark:text-red-400 flex items-center justify-center gap-2">
            <LogIn size={28} />
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="email"
                className="w-full px-4 py-3 border rounded-lg bg-gray-200  shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 font-medium text-sm hover:underline transition-all duration-300 ease-in-out px-2 py-1"
                >
                  Forgot Password
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="password"
                className="w-full px-4 py-3 border bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 flex items-center justify-center gap-2 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 dark:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-400"
            >
              <LogIn />
              Login
            </button>
          </form>
          <div className="text-center text-gray-500 dark:text-gray-300">
            or login with provider
          </div>
          <div
            id="googleSignInDiv"
            className="flex items-center justify-center w-full py-3 mt-2"
          ></div>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-red-600 dark:text-red-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
