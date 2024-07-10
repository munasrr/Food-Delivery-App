import { apiSlice } from "./apiSlice";

const FOOD_URL = "/api/foods";
const FOOD_IMAGE = "/api/foods/uploads";

export const foodApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFood: builder.mutation({
      query: (data) => ({
        url: `${FOOD_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),
    getFood: builder.query({
      query: () => ({
        url: `${FOOD_URL}`,
        method: "GET",
      }),
    }),
    getImage: builder.mutation({
      query: () => ({
        url: `${FOOD_IMAGE}/image`,
        method: "GET",
      }),
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `${FOOD_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    updateFood: builder.mutation({
      query: ({ id, data }) => ({
        url: `${FOOD_URL}/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddFoodMutation,
  useGetFoodQuery,
  useGetCategoriesQuery,
  useDeleteFoodMutation,
  useUpdateFoodMutation,
} = foodApiSlice;
