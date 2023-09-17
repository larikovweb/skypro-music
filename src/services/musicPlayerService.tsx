import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITrack } from '../interfaces/interfaces';

export const musicPlayerAPI = createApi({
  reducerPath: 'musicPlayerAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech' }),
  endpoints: (build) => ({
    getAllTracks: build.query<ITrack[], void>({
      query: () => ({
        url: '/catalog/track/all/',
        method: 'GET',
      }),
    }),

    getTrackById: build.query<ITrack, number>({
      query: (id) => ({
        url: `/catalog/track/${id}`,
        method: 'GET',
      }),
    }),

    getSelections: build.query<ITrack[], void>({
      query: () => ({
        url: '/catalog/selection/',
        method: 'GET',
      }),
    }),

    getSelectionById: build.query<ITrack, number>({
      query: (id) => ({
        url: `/catalog/selection/${id}/`,
        method: 'GET',
      }),
    }),

    addToFavorites: build.mutation<ITrack, number>({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer <accessToken>`, // Здесь нужно подставить актуальный access токен
        },
      }),
    }),

    removeFromFavorites: build.mutation<ITrack, number>({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer <accessToken>`, // Здесь нужно подставить актуальный access токен
        },
      }),
    }),

    getAllFavoriteTracks: build.query<ITrack[], void>({
      query: () => ({
        url: '/catalog/track/favorite/all/',
        method: 'GET',
        headers: {
          Authorization: `Bearer <accessToken>`, // Здесь нужно подставить актуальный access токен
        },
      }),
    }),
  }),
});
