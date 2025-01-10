import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCredentials } from "../../slices/authSlice";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { UserPlus } from "lucide-react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminKey, setAdminKey] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [register] = useRegisterMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }

    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogleLogin,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
      );

      window.google.accounts.id.prompt();
    }
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
        dispatch(setCredentials({ ...data }));
        navigate("/");
        toast.success("Registered with Google!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Google registration failed!");
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }
      if (isAdmin) {
        formData.append("isAdmin", true);
        formData.append("adminKey", adminKey);
      }

      const res = await register(formData).unwrap();
      dispatch(setCredentials(res));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-24 h-24 bg-background text-text dark:bg-background-dark dark:text-text-dark p-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-background rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-primary  flex items-center justify-center gap-2">
            <UserPlus size={28} />
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400"
              />
              <label
                htmlFor="isAdmin"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
              >
                Register as Admin
              </label>
            </div>
            {isAdmin && (
              <div>
                <input
                  type="text"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  required
                  placeholder="Admin Key"
                  className="w-full px-4 py-3 border bg-gray-100 bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-primary rounded-lg shadow-lg bg-primary/90 dark:bg-primary dark:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-400"
            >
              Register
            </button>
          </form>
          <div
            id="googleSignInDiv"
            className="flex items-center justify-center w-full py-3 mt-2"
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
