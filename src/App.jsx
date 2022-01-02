import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "redux/reducers/weatherReducer";
import ContainerTodayWeather from "components/TodayWeather/ContainerTodayWeather";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import getWeather from "./services/getWeatherInfo";
import { setMode } from "redux/reducers/appModeReducer";
//import ErrorMessage from "./components/ErrorMessage";
import { app } from "assets/styles/App.module.scss"
import Loader from "components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const mode = localStorage.getItem("mode");
  
  useEffect(() => {
    const getData = async () => {
      const {todayWeather, city, nextDaysWeather} = await getWeather(`${process.env.REACT_APP_URL}city=Puebla,Mexico&days=6&key=${process.env.REACT_APP_API_KEY}`);
      console.log("respuesta ", todayWeather)
      dispatch(setCurrentWeather(todayWeather));
      dispatch(setCityName(city));
      dispatch(setNextDaysWeather(nextDaysWeather));
      setLoading(false);
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    if (!mode) {
      localStorage.mode = "dark";
      dispatch(setMode("dark"));
    }else{
      dispatch(setMode(localStorage.getItem("mode")));
    }
  }, [mode, dispatch]);

  return loading ? <Loader/> : (
    <div className={app}>
      <ContainerTodayWeather />
      <WeatherNextDays />
    </div>
  );
}

export default App;