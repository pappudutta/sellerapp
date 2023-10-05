import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    carsData: [],
    searchData: [],
  },
  reducers: {
    getJsonData: (state, action) => {
      state.carsData = action.payload;
    },
    getSearchedData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const { getJsonData, getSearchedData } = carsSlice.actions;
export default carsSlice.reducer;
