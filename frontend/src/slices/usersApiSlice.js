import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `${USERS_URL}/update/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/delete/${id}`,
        method: "DELETE",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
  useForgotPasswordMutation,
} = usersApiSlice;
