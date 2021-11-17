import { useSelector } from "react-redux";
import TextInfo from "components/common/TextInfo";
import TextDate from "components/common/TextDate";
import WeatherImage from "components/common/WeatherImage";
import {
  image_weather_container,
  temperature_value_container,
  temperature_time,
  temperature_today_date,
  temperature_now,
  temperature_unit,
  content_city,
  city,
} from "assets/styles/TodayWeather.module.scss";
import { todayWeatherImage } from "assets/styles/WeatherImage.module.scss";
import getImageWeather from "getWeatherImage";

function InfoTodayWeather() {
  const { weather, temp, valid_date } = useSelector(
    (state) => state.myWeatherReducer.currentWeather
  );
  const { name, code } = useSelector((state) => state.myWeatherReducer.city);

  if (!weather) {
    return <h1>Cargando</h1>;
  }

  return (
    /* Object.entries(weatherData).length === 0  && (Resolver lo del objeto undefined con renderizado condicional*/
    <>
      <div className={image_weather_container}>
        <WeatherImage
          cssClass={todayWeatherImage}
          srcImage={`/img/${getImageWeather(weather.code)}`}
          altImage="weather"
        />
      </div>
      <div className={temperature_value_container}>
        <TextInfo cssClass={temperature_now} text={`${temp.toFixed()}`} />
        <TextInfo cssClass={temperature_unit} text="º C" />
      </div>
      <TextInfo
        cssClass={`${temperature_time} tmp`}
        text={`${weather.description}`}
      />
      <TextDate
        cssClass={`${temperature_today_date} tmp`}
        date={valid_date}
        text="Today • "
      />
      <div className={content_city}>
        <img className="icon" src="img/map.svg" alt="navigation icon" />
        {/** TODO: cambiar el icono por uno mejor */}
        <TextInfo cssClass={`${city} tmp`} text={`${name}, ${code}`} />
      </div>
    </>
  );
}

export default InfoTodayWeather;
