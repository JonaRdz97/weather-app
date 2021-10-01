//import Card from '@material-ui/core/Card';
import TextDate from "../common/TextDate";
import TextInfo from '../common/TextInfo';
import WeatherImage from "../common/WeatherImage";

function WeatherCard({min, max, date, imgWeather}){
    return(
        <div className={`days-weather ${localStorage.getItem("mode") === "light" ? "dkm-weather-days" : ""}`}>
            <TextDate
                cssClass="day"
                date={date}
            />
            <WeatherImage
                cssClass="weather-image"
                srcImage={imgWeather}
                altImage="weather icon"
            />
            <div className="min-max">
                <TextInfo
                    cssClass="max"
                    text={`${max}ºC`}
                />
                <TextInfo
                    cssClass="min"
                    text={`${min}ºC`}
                />
            </div>
        </div>
    );
}

export default WeatherCard;