import { baseApi } from "./baseApi";

const ROOM_URL = "/room";
export const roomApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleRoom: build.query({
      query: (id) => ({
        url: `${ROOM_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["room"],
    }),
    reserveAroom: build.mutation({
      query: ({ id, roomData }) => ({
        url: `${ROOM_URL}/room-no/${id}`,
        method: "PATCH", // Use the PATCH HTTP method for updating
        data: roomData, // The data to be sent in the request body
      }),
      invalidatesTags: ["room"], // Invalidate the single room cache
    }),
  }),
});

export const { useGetSingleRoomQuery, useReserveAroomMutation } = roomApi;
