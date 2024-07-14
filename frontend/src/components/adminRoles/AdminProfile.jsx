import React, { useState } from "react";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dawid Paszko",
    email: "dawid.paszko@gmail.com",
    phone: "12345678",
    street: "test address 321",
    postalCode: "1234",
    city: "Stockholm",
    country: "Sweden",
  });

  return (
    <div className="container mx-auto p-6 bg-background text-text dark:bg-background-dark dark:text-text-dark rounded-lg shadow-md">
      <div className="flex items-center space-x-6 mb-8">
        <img
          src="path_to_profile_image.jpg" // replace with the actual path
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <button className="text-blue-500 dark:text-blue-300 hover:underline">
            Change image
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-gray-700 dark:text-gray-300">
            First and last name
          </label>
          <input
            type="text"
            value={profile.name}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300">
            Phone
          </label>
          <input
            type="text"
            value={profile.phone}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300">
            Street address
          </label>
          <input
            type="text"
            value={profile.street}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300">
            Postal code
          </label>
          <input
            type="text"
            value={profile.postalCode}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300">City</label>
          <input
            type="text"
            value={profile.city}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 dark:text-gray-300">
            Country
          </label>
          <input
            type="text"
            value={profile.country}
            readOnly
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-700 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
