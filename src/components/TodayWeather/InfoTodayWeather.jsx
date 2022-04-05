import useWeatherImage from "hooks/useWeatherImage";
import { useSelector } from "react-redux";
import TextInfo from "components/common/TextInfo";
import TextDate from "components/common/TextDate";
import WeatherImage from "components/common/WeatherImage";
import useTemperatureConversion from "hooks/useTemperatureConversion";
import { image_weather_container, temperature_time, temperature_today_date, temperature_now, temperature_unit, content_city, city } from "assets/styles/TodayWeather.module.scss";
import { todayWeatherImage } from "assets/styles/WeatherImage.module.scss";
import locationIcon from "assets/img/location.svg";

function InfoTodayWeather() {
  
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
  const { weather, temp, valid_date } = useSelector((state) => state.myWeatherReducer.currentWeather);
  const { name, code } = useSelector((state) => state.myWeatherReducer.city);
  const weatherImg = useWeatherImage(weather.code);
  const temperature = useTemperatureConversion(temp);
  
  return (
    <>
      <div className={image_weather_container}>
        <WeatherImage cssClass={todayWeatherImage} srcImage={weatherImg} altImage="weather"/>
      </div>
      <div>
        <TextInfo cssClass={temperature_now} text={`${temperature}`} />
        <TextInfo cssClass={temperature_unit} text={`º ${currentMode.toUpperCase()}`}/>
      </div>
      <TextInfo cssClass={`${temperature_time} tmp`} text={`${weather.description}`}/>
      <TextDate cssClass={`${temperature_today_date} tmp`} date={valid_date} text="Today • "/>
      <div className={content_city}>
        <img className="icon" src={locationIcon} alt="navigation icon" />
        <TextInfo cssClass={`${city} tmp`} text={`${name}, ${code}`} />
      </div>
    </>
  );
}

export default InfoTodayWeather;