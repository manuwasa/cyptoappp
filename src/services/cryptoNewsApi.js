import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "f5e7a3168amsh3a4a12cb7b18ae8p1d35c7jsn01f4b1f8db75",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoNewsHeaders }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => {
        return {
          url: "search",
          method: "GET",
          params: `q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        };
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
