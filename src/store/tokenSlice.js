import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('token', action.payload);
    },
    removeToken: (state) => {
      state.value = '';
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;
export const selectToken = (state) => state.token.value;
export default tokenSlice.reducer;
