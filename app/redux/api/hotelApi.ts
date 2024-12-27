import { baseApi } from "./baseApi";

const HOTEL_URL = "/hotel";
export const hotelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHotels: build.query({
      query: (arg?: Record<string, any>) => ({
        url: `${HOTEL_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: ["hotel"],
    }),
    hotelDetails: build.query({
      query: (id) => ({
        url: `${HOTEL_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["hotel", "room"],
    }),
  }),
});

export const { useGetHotelsQuery, useHotelDetailsQuery } = hotelApi;
