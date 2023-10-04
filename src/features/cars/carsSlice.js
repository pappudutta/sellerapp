import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    carsData: [],
  },
  reducers: {
    getJsonData: (state, action) => {
      state.carsData = action.payload;
    },
  },
});

export const { getJsonData } = carsSlice.actions;
export default carsSlice.reducer;
