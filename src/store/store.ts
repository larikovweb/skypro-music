import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { orderAPI } from '../services/OrderService';
import auth from './reducers/authSlice';
import { articleAPI } from '../services/ArticlesService';
import { authAPI } from '../services/authAPI';

const rootReducer = combineReducers({
  [orderAPI.reducerPath]: orderAPI.reducer,
  [articleAPI.reducerPath]: articleAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: auth,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(orderAPI.middleware, articleAPI.middleware, authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
