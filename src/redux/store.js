import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/weatherReducer";
import appModeReducer from "./reducers/appModeReducer";

function initStore() {
  return configureStore({
    reducer: {
      myWeatherReducer: weatherReducer,
      myModeReducer: appModeReducer,
    },
  });
}

const store = initStore();

export default store;
