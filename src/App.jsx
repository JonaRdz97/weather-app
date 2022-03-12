import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "redux/reducers/weatherReducer";
import ContainerTodayWeather from "components/TodayWeather/ContainerTodayWeather";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import getWeather from "./services/getWeatherInfo";
import { setMode } from "redux/reducers/appModeReducer";
import ErrorPage from "components/common/ErrorMessage";
import { app } from "assets/styles/App.module.scss"
import Loader from "components/common/Loader";

//TODO color amarillo a utilizar #FFF619

function App() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const mode = localStorage.getItem("mode");
  
  useEffect(() => {
    const getData = async () => {
      try {
        const {todayWeather, city, nextDaysWeather} = await getWeather({city: "Puebla,Mexico"});
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

  useEffect(() => {
    if (!mode) {
      localStorage.mode = "c";
      dispatch(setMode("c"));
    }else{
      dispatch(setMode(localStorage.getItem("mode")));
    }
  }, [mode, dispatch]);

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