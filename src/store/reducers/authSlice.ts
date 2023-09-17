import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthResult } from '../../interfaces/interfaces';

interface AuthState {
  authResult: IAuthResult | null;
}

const savedUser = localStorage.getItem('user');

const initialState: AuthState = {
  authResult: savedUser ? JSON.parse(savedUser) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authResult = null;
      localStorage.removeItem('user');
    },
    saveAuthResult: (state, action: PayloadAction<any>) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.authResult = action.payload;
    },
  },
});

export const { logout, saveAuthResult } = authSlice.actions;
export default authSlice.reducer;
