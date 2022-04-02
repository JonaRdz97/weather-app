import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "redux/reducers/weatherReducer";
import ContainerTodayWeather from "components/TodayWeather/ContainerTodayWeather";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import getWeather from "./services/getWeatherInfo";
import ErrorPage from "components/common/ErrorMessage";
import { app } from "assets/styles/App.module.scss"
import Loader from "components/common/Loader";
import { setMode } from "redux/reducers/appModeReducer";

function App() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const temperatureUnit = localStorage.getItem("tmpUnit");
    if (temperatureUnit) {
      dispatch(setMode(temperatureUnit));
    }else{
      localStorage.tmpUnit = "c";
      dispatch(setMode("c"));
    }
    const getData = async () => {
      try {
        const {todayWeather, city, nextDaysWeather} = await getWeather({city: "Mexico"});
        dispatch(setCurrentWeather(todayWeather));
        dispatch(setCityName(city));
        dispatch(setNextDaysWeather(nextDaysWeather));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getData();
  }, [dispatch]); 

  return loading ? <Loader/> : (
    <div className={app}>
      {
        error ? <ErrorPage/> :
        <>
          <ContainerTodayWeather />
          <WeatherNextDays /> 
        </>
      }
    </div>
  );
}

export default App;