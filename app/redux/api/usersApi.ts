import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: () => {
        return {
          url: `${USER_URL}`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),
  }),
});

export const { useUsersQuery } = userApi;
