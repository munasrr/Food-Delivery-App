import { apiSlice } from "./apiSlice";

const CART_URL = "/api/carts";

export const cartsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    getCart: builder.query({
      query: (userId) => ({
        url: `${CART_URL}/${userId}`,
        method: "GET",
      }),
    }),
    removeFromCart: builder.mutation({
      query: (data) => ({
        url: `${CART_URL}/remove`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
} = cartsApiSlice;
