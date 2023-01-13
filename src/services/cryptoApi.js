import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "f5e7a3168amsh3a4a12cb7b18ae8p1d35c7jsn01f4b1f8db75",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

// const createRequest = (url) => {
//   return { url, headers: cryptoApiHeaders };
// };

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoApiHeaders }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (arg) => {
        return {
          url: "coins",
          method: "GET",
          params: `limit=${arg}`,
        };
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
