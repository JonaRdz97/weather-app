import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "redux/reducers/weatherReducer";
import ContainerTodayWeather from "components/TodayWeather/ContainerTodayWeather";
import WeatherNextDays from "components/WeatherNextDays/WeatherNextDays";
import getWeather from "./services/getWeatherInfo";
import { setMode } from "redux/reducers/appModeReducer";
//import ErrorMessage from "./components/ErrorMessage";
import { app } from "assets/styles/App.module.scss"

function App() {
  const dispatch = useDispatch();
  const mode = localStorage.getItem("mode");
  
  useEffect(() => {
    /* const getData = async () => {
      const response = await getWeather(`${process.env.REACT_APP_URL}city=Puebla,Mexico&days=6&key=${process.env.REACT_APP_API_KEY}`);
      dispatch(setCurrentWeather(response.todayWeather));
      dispatch(setCityName(response.city));
      dispatch(setNextDaysWeather(response.nextDaysWeather));
    };
    getData(); */
    const response = getWeather(`${process.env.REACT_APP_URL}city=Puebla,Mexico&days=6&key=${process.env.REACT_APP_API_KEY}`);
    if (!mode) {
      localStorage.mode = "dark";
      dispatch(setMode("dark"));
    }else{
      dispatch(setMode(localStorage.getItem("mode")));
    }

  }, [dispatch, mode]);

  return (
    <div className={app}>
      <ContainerTodayWeather />
      <WeatherNextDays />
    </div>
  );
}

export default App;