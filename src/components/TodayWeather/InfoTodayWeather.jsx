import { useSelector } from 'react-redux';
import TextInfo from '../common/TextInfo';
import TextDate from '../common/TextDate';
import WeatherImage from '../common/WeatherImage';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Skeleton from '@material-ui/lab/Skeleton';
import getImageWeather from '../../getWeatherImage';

function InfoTodayWeather(){

    const {weather, temp, valid_date} = useSelector((state) => state.myWeatherReducer.currentWeather);
    const {name, code} = useSelector((state) => state.myWeatherReducer.city);

    if (!weather){
        return  <Skeleton variant="circle" width={200} height={200} /> 
    }

    return (
        /* Object.entries(weatherData).length === 0  && (Resolver lo del objeto undefined con renderizado condicional*/ 
        <div className="content-now">
            <div className="content-weather-now">
                <WeatherImage 
                    cssClass="weather-type" 
                    srcImage={`/img/${getImageWeather(weather.code)}`}
                    altImage="weather"
                />
            </div> 
            {/* <Skeleton variant="text" />
            <Skeleton variant="rect" width={250} height={118} /> */}
            <div className="container-temperature-value">
                <TextInfo 
                    cssClass="temperature-now tpm" 
                    text={`${temp.toFixed()}`}
                />
                <TextInfo 
                    cssClass="temperature-kind"
                    text="º C"
                />
            </div>
            <TextInfo
                cssClass="temperature-time tmp"
                text={`${weather.description}`}
            />
            <TextDate
                cssClass="weather-date-now tmp"
                date={valid_date} text="Today • "
            />
            <div className="content-city">
                <LocationOnRoundedIcon className="icon"/>
                <TextInfo
                    cssClass="city tmp"
                    text={`${name}, ${code}`}
                />
            </div>
        </div>
    );
}

export default InfoTodayWeather;