import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodaysHightlights from "../TodaysHightlights/TodaysHightlights";
import MyIconButton from "../common/MyIconButton";
import WeatherCard from "./WeatherCard";
import Attribution from "../common/Atributtion";
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import getImageWeather from "../../getWeatherImage";
import { setMode } from "../../redux/reducers/appModeReducer";

function WeatherNextDays() {

  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
  const dispatch = useDispatch();
  const nextDaysInfo = useSelector(
    (state) => state.myWeatherReducer.nextDaysWeather
  );

  /*   useEffect(() => {
      console.log("Use effect other container")
    }, [currentMode]);
 */
  console.log(currentMode)
  const handleModeClick = () => {
    console.log("Boton presionado")
    if (currentMode === "light") {
      localStorage.mode = "dark";
      dispatch(setMode("dark"))
      console.log("SE pone en dark")
    } else  if(currentMode === "dark"){
      localStorage.mode = "light";
      dispatch(setMode("light"))
      console.log("SE pone en light")
    }
  }

  return (
    <div className={`others ${ currentMode === "light" ? "change-color1" : ""}`}>
      <div className="dkmode-btn">
        <MyIconButton icon={currentMode === "light" ? <Brightness2RoundedIcon /> : <WbSunnyRoundedIcon />} handleClick={handleModeClick}/>
      </div>
      <div className="container-next-days-weather">
        {nextDaysInfo.map((day) => {
          return (
            <WeatherCard
              key={day.valid_date}
              date={day.valid_date}
              max={day.max_temp.toFixed()}
              min={day.min_temp.toFixed()}
              imgWeather={`/img/${getImageWeather(day.weather.code)}`}
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
