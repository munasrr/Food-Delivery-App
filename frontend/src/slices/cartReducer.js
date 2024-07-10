import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { cartItems: [], totalQuantity: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { cartItems: [], totalQuantity: 0 };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { id, name, price, image, quantity } = action.payload;
      const itemQuantity = parseInt(quantity, 10) || 1;
      const itemPrice = parseFloat(price) || 0;

      // Add each item as a separate entry
      state.cartItems.push({
        id: id + "_" + new Date().getTime(),
        productId: id,
        name,
        price: itemPrice,
        image,
        quantity: itemQuantity,
      });

      state.totalQuantity = state.cartItems.length;

      saveState(state);
    },

    removeItemFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalQuantity = state.cartItems.length;

      saveState(state);
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;

      saveState(state);
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
