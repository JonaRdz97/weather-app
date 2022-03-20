import { createSlice } from "@reduxjs/toolkit";

export const appModeReducer = createSlice({
  name: "myModeReducer",
  initialState: {
    currentMode: localStorage.getItem("mode") || "c",
    isSearchLocation: false,
  },
  reducers: {
    setMode: (state, {payload}) => {
      return {...state, currentMode : payload}
    },
    openSearchLocation: (state) => {
      return {...state, isSearchLocation: true}
    },
    closeSearchLocation: (state) => {
      return {...state, isSearchLocation: false}
    },
  },
});

export const {setMode, openSearchLocation, closeSearchLocation} = appModeReducer.actions;

export default appModeReducer.reducer;