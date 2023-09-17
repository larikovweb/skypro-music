import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech' }),
  endpoints: (build) => ({
    register: build.mutation<
      { email: string; first_name: string; id: number; last_name: string; username: string },
      { email: string; password: string; username: string }
    >({
      query: (credentials) => ({
        url: '/user/signup/',
        method: 'POST',
        body: credentials,
        headers: { 'content-type': 'application/json' },
      }),
    }),
    login: build.mutation<
      { email: string; first_name: string; id: number; last_name: string; username: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
        headers: { 'content-type': 'application/json' },
      }),
    }),
    getToken: build.mutation<{ access: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/user/token/',
        method: 'POST',
        body: credentials,
        headers: { 'content-type': 'application/json' },
      }),
    }),
    refreshToken: build.mutation<{ access: string }, { refresh: string }>({
      query: (refreshToken) => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: refreshToken,
        headers: { 'content-type': 'application/json' },
      }),
    }),
  }),
});
