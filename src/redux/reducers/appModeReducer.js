import { createSlice } from "@reduxjs/toolkit";

export const appModeReducer = createSlice({
  name: "myModeReducer",
  initialState: {
    currentMode: ""
  },
  reducers: {
    setMode: (state, {payload}) => {
      return {...state, currentMode : payload}
    }
  },
});

export const {setMode} = appModeReducer.actions;

export default appModeReducer.reducer;