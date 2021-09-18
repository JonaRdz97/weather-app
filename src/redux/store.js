import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer';

function initStore(){
    return configureStore({
        reducer: { myWeatherReducer: weatherReducer}
    });
}

const store = initStore();

export default store;