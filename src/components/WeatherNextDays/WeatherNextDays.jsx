import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodaysHightlights from "components/TodaysHightlights/TodaysHightlights";
import IconButton from "components/common/IconButton";
import Attribution from "components/common/Attributtion";
import WeatherCard from "./WeatherCard";
import { setMode } from "redux/reducers/appModeReducer";
import { others, dkm_btn_container, next_days_weather_container } from "assets/styles/WeatherNextDays.module.scss";
import sunIcon from "assets/img/sun.svg";
import moonIcon from "assets/img/moon.svg";

function WeatherNextDays() {
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
  const dispatch = useDispatch();
  const nextDaysInfo = useSelector(
    (state) => state.myWeatherReducer.nextDaysWeather
  );

     useEffect(() => {
      console.log("Use effect other container")
    }, [currentMode]);
 
  console.log(currentMode);
  const handleModeClick = () => {
    console.log("Boton presionado");
    if (currentMode === "light") {
      localStorage.mode = "dark";
      dispatch(setMode("dark"));
    } else if (currentMode === "dark") {
      localStorage.mode = "light";
      dispatch(setMode("light"));
    }
  };

  return nextDaysInfo && (
    <div
      className={`${others} ${currentMode === "light" ? "change-color1" : ""}`}
    >
      <div className={dkm_btn_container}>
        <IconButton handleClick={handleModeClick}>
          {currentMode === "dark" ? (
            <img className="icon" src={sunIcon} alt="sun icon" />
          ) : (
            <img className="icon" src={moonIcon} alt="moon icon" />
          )}
        </IconButton>
      </div>
      <div className={next_days_weather_container}>
        {nextDaysInfo.map((day, index) => {
          return (
            <WeatherCard
              key={day.valid_date}
              date={day.valid_date}
              max={day.max_temp.toFixed()}
              min={day.min_temp.toFixed()}
              imgCode={day.weather.code}
            />
          );
        })}
      </div>
      <TodaysHightlights />
      <Attribution />
    </div>
  );
}

export default WeatherNextDays;
