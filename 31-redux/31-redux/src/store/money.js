import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { deposit, withdraw } = moneySlice.actions;

export default moneySlice.reducer;
