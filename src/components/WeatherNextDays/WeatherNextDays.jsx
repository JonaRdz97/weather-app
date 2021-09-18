import { useSelector } from "react-redux";
import TodaysHightlights from "../TodaysHightlights/TodaysHightlights";
import MyIconButton from "../common/MyIconButton";
import WeatherCard from './WeatherCard';
import Attribution from "../Atributtion";
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import getImageWeather from "../../getWeatherImage";

function WeatherNextDays(){

    const nextDaysInfo = useSelector((state) => state.myWeatherReducer.nextDaysWeather);

    return(
        <div className="others">
            <div className="dkmode-btn">
                <MyIconButton icon={<WbSunnyRoundedIcon/>}/>
            </div>
            <div className="container-next-days-weather">
                {nextDaysInfo.map((day) => {
                    return <WeatherCard 
                                key={day.valid_date}
                                date={day.valid_date}
                                max={day.max_temp.toFixed()}
                                min={day.min_temp.toFixed()}
                                imgWeather={`/img/${getImageWeather(day.weather.code)}`}
                            />
                })}
            </div>
            <TodaysHightlights/>
            <Attribution/>
        </div>
    );
}

export default WeatherNextDays;