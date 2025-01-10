/* eslint-disable no-unused-vars */
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
  console.log("userInfo", userInfo);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.user.name);
      setEmail(userInfo.user.email);
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary to-red-600 px-6 py-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <img
                    src="/avatar.png"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  {userInfo.user.isAdmin && (
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                      Admin
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Admin Credentials */}
            {userInfo.user.isAdmin && (
              <div className="px-6 py-4 bg-gray-50 border-b">
                <AdminCredentials />
              </div>
            )}

            {/* Update Profile Form */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Update Profile
              </h2>
              <form onSubmit={submitHandler} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      value={name}
                      autoComplete="username"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoSave="false"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-white"
                    />
                  </div>
                </div>

                {isLoading ? (
                  <div className="flex justify-center">
                    <Loader />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 mt-6 flex items-center justify-center gap-2 text-white bg-primary rounded-lg shadow-lg bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Update Profile
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileScreen;
