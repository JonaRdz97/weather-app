import { useSelector } from "react-redux";
import useWeatherImage from "hooks/useWeatherImage";
import TextDate from "components/common/TextDate";
import TextInfo from 'components/common/TextInfo';
import WeatherImage from "components/common/WeatherImage";
import { nextDaysWeatherImage } from "assets/styles/WeatherImage.module.scss";
import { daysWeather, textDate, minMaxContainer, minStyles, maxStyles } from "assets/styles/WeatherCard.module.scss";

function WeatherCard({min, max, date, imgCode}){
    const weatherImg = useWeatherImage(imgCode);
    const currentMode = useSelector((state) => state.myModeReducer.currentMode);

    return(
        <div className={`${daysWeather} ${localStorage.getItem("mode") === "light" ? "dkm-weather-days" : ""}`}>
            <TextDate cssClass={textDate} date={date}/>
            <WeatherImage
                cssClass={nextDaysWeatherImage}
                srcImage={weatherImg}
                altImage="weather icon"
            />
            <div className={minMaxContainer}>
                <TextInfo cssClass={maxStyles} text={`${max}º${currentMode.toUpperCase()}`}/>
                <TextInfo cssClass={minStyles} text={`${min}º${currentMode.toUpperCase()}`}/>
            </div>
        </div>
    );
}

export default WeatherCard;