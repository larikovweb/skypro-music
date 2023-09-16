import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './reducers/authSlice';
import track from './reducers/trackSlice';
import { authAPI } from '../services/authService';
import { musicPlayerAPI } from '../services/musicPlayerService';

const rootReducer = combineReducers({
  [musicPlayerAPI.reducerPath]: musicPlayerAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: auth,
  track: track,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(musicPlayerAPI.middleware, authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
