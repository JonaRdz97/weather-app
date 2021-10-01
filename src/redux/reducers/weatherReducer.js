import { createSlice } from "@reduxjs/toolkit";

export const weatherReducer = createSlice({
  name: "myWeatherReducer",
  initialState: {
    city: {},
    currentWeather: {},
    nextDaysWeather: [],
  },
  reducers: {
    setCurrentWeather: (state, { payload }) => {
      return { ...state, currentWeather: payload };
    },
    setCityName: (state, { payload }) => {
      return { ...state, city: payload };
    },
    setNextDaysWeather: (state, { payload }) => {
      return { ...state, nextDaysWeather: payload };
    },
  },
});

export const { setCurrentWeather, setCityName, setNextDaysWeather } = weatherReducer.actions;

export default weatherReducer.reducer;
