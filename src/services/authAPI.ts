import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech' }),
  endpoints: (build) => ({
    register: build.mutation<boolean, { email: string; password: string; username: string }>({
      query: (credentials) => ({
        url: '/user/signup/',
        method: 'POST',
        body: credentials,
        headers: { 'content-type': 'application/json' },
      }),
    }),
    login: build.mutation<boolean, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
        headers: { 'content-type': 'application/json' },
      }),
    }),
  }),
});
