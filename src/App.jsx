import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "./redux/reducers/weatherReducer";
import ContainerTodayWeather from "./components/TodayWeather/ContainerTodayWeather";
import WeatherNextDays from "./components/WeatherNextDays/WeatherNextDays";
import getWeather from './Provider';
//import ErrorMessage from "./components/ErrorMessage";

function App(){

    const dispatch = useDispatch();
        
    useEffect(() => {
        const getData = async() => {
            const response = await getWeather();
            dispatch(setCurrentWeather(response.todayWeather));
            dispatch(setCityName(response.city));
            dispatch(setNextDaysWeather(response.nextDaysWeather))
        };
        getData(); 
    },[dispatch]);

    return(
        <div className="app">
            <ContainerTodayWeather/>
            <WeatherNextDays/>
        </div>
    );
}
  
export default App;