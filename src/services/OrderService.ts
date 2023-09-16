import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IOrder } from '../interfaces/interfaces';

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63c3d39ea9085635752ce81c.mockapi.io' }),
  tagTypes: ['Order'],
  endpoints: (build) => ({
    fetchAllOrders: build.query<IOrder[], number>({
      query: (limit = 5) => ({
        url: `/busines`,
        params: {
          limit: limit,
        },
      }),
      providesTags: (result) => ['Order'],
    }),
    // TODO при переносе на нормальный бэк, надо убрать IOrder[] у fetchOrder
    fetchOrder: build.query<IOrder[], number>({
      query: (id) => ({
        url: `/busines`,
        params: {
          id: id,
        },
      }),
      providesTags: (result) => ['Order'],
    }),
    createOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/busines`,
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Order'],
    }),
    updateOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/busines/${order.id}`,
        method: 'PUT',
        body: order,
      }),
      invalidatesTags: ['Order'],
    }),
    deleteOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `/busines/${order.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});
