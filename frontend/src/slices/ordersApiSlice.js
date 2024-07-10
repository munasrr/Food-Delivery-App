import { apiSlice } from "./apiSlice";

const ORDER_URL = "/api/orders";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/place`,
        method: "POST",
        body: data,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: `${ORDER_URL}/list`,
        method: "GET",
      }),
    }),
    getOrder: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
        method: "GET",
      }),
    }),
    getUserOrders: builder.query({
      query: (userId) => ({
        url: `${ORDER_URL}/user`,
        method: "POST",
        body: { userId },
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/update-status`,
        method: "POST",
        body: data,
      }),
    }),
    verifyOrder: builder.mutation({
      query: (data) => ({
        url: `${ORDER_URL}/verify`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrderQuery,
  useGetOrdersQuery,
  useGetUserOrdersQuery,
  useUpdateOrderStatusMutation,
  useVerifyOrderMutation,
} = ordersApiSlice;
