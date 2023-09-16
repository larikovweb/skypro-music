import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IArticle } from '../interfaces/interfaces';

export const articleAPI = createApi({
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63c3d39ea9085635752ce81c.mockapi.io' }),
  tagTypes: ['Article'],
  endpoints: (build) => ({
    fetchAllArticles: build.query<IArticle[], number>({
      query: (limit = 5) => ({
        url: `/articles`,
        params: {
          limit: limit,
        },
      }),
      providesTags: (result) => ['Article'],
    }),
    // TODO при переносе на нормальный бэк, надо убрать IArticle[] у fetchArticle
    fetchArticle: build.query<IArticle[], number>({
      query: (id) => ({
        url: `/articles`,
        params: {
          id: id,
        },
      }),
      providesTags: (result) => ['Article'],
    }),
    createArticle: build.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `/articles`,
        method: 'POST',
        body: article,
      }),
      invalidatesTags: ['Article'],
    }),
    updateArticle: build.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `/busines/${article.id}`,
        method: 'PUT',
        body: article,
      }),
      invalidatesTags: ['Article'],
    }),
    deleteArticle: build.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `/articles/${article.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});
