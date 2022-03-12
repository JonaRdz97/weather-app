import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodaysHightlights from "components/TodaysHightlights/TodaysHightlights";
import IconButton from "components/common/IconButton";
import Attribution from "components/common/Attributtion";
import WeatherCard from "./WeatherCard";
import { setMode } from "redux/reducers/appModeReducer";
import { others, dkm_btn_container, next_days_weather_container, unit_text } from "assets/styles/WeatherNextDays.module.scss";

function WeatherNextDays() {
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
  const dispatch = useDispatch();
  const nextDaysInfo = useSelector((state) => state.myWeatherReducer.nextDaysWeather);
 
  const handleModeClick = () => {
    console.log("Boton presionado");
    if (currentMode === "f") {
      localStorage.mode = "c";
      dispatch(setMode("c"));
    } else if (currentMode === "c") {
      localStorage.mode = "f";
      dispatch(setMode("f"));
    }
  };

  return nextDaysInfo && (
    <div className={`${others} ${currentMode === "light" ? "change-color1" : ""}`}>
      <div className={dkm_btn_container}>
        <IconButton handleClick={handleModeClick}>
            <p className={unit_text}>ºC</p>
        </IconButton>
        <IconButton handleClick={handleModeClick}>
            <p className={unit_text}>ºF</p>
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
