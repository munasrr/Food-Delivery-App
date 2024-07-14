import { RefreshCw } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../slices/authSlice";
import { useUpdateUserProfileMutation } from "../../slices/usersApiSlice";
import AdminCredentials from "../adminRoles/AdminCredentials";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import Loader from "../pages/Loader";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...userInfo, user: { ...res } }));
        toast.success("Profile Updated");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6 mt-14 bg-background text-text">
        <div className="bg-background shadow-2xl rounded-lg p-6 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
              {userInfo.profilePicture ? (
                <img
                  src={userInfo.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
              )}
            </div>
            <div className="w-full md:w-2/3">
              {userInfo.user.isAdmin && <AdminCredentials />}
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-6">
              Update Profile
            </h2>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  autoComplete="username"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                />
              </div>
              {isLoading && <Loader />}
              <button
                type="submit"
                className="w-full py-3 mt-4 flex items-center justify-center gap-2 text-white bg-primary rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-400"
              >
                <RefreshCw className="w-5 h-5" />
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
