import { createSlice } from "@reduxjs/toolkit";
import { clearCart } from "./cartReducer";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // Adding a check to ensure userInfo is set correctly
      if (state.userInfo) {
        console.log("User info set:", state.userInfo);
      } else {
        console.log("Failed to set user info");
      }
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const logoutUser = () => async (dispatch) => {
  dispatch(logout());
  dispatch(clearCart()); // Clear cart on logout
};

export const loginUser = (userData) => async (dispatch) => {
  dispatch(setCredentials(userData));
  dispatch(clearCart()); // Clear cart on login to handle new user session
};

export default authSlice.reducer;
