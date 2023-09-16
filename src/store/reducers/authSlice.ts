import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthResult } from '../../interfaces/interfaces';

interface AuthState {
  isAuthenticated: boolean;
  authResult: IAuthResult | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  authResult: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    saveAuthResult: (state, action: PayloadAction<any>) => {
      state.authResult = action.payload;
    },
  },
});

export const { loginSuccess, logout, saveAuthResult } = authSlice.actions;
export default authSlice.reducer;
