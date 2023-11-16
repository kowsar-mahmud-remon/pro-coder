import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pro-coder-server-neon.vercel.app/api/v1",
  }),
  tagTypes: ["user", "courseCatalog"],
  endpoints: () => ({}),
});
