import { useSelector } from "react-redux";
import TextInfo from "components/common/TextInfo";
import WindDirection from "./WindDirection";
import HumidityBar from "./HumidityBar";
import StatisticsCard from "./StatisticsCard";

function TodaysHightlights(){

    const {wind_cdir, wind_spd, rh, vis, pres} = useSelector((state) => state.myWeatherReducer.currentWeather);
    
    if (!wind_spd){
        return  <h1>Cargando . . .</h1> 
    }

    return(
        <div className="stats">
            <TextInfo
                cssClass="title-today"
                text="Today's Hightlights"
            />
            <StatisticsCard
                title="Wind status"
                value={wind_spd.toFixed(1)}
                unit="m/s"
            >
                <WindDirection direction={wind_cdir}/>
            </StatisticsCard>
            <StatisticsCard
                title="Humidity"
                value={rh}
                unit="%"
            >
                <HumidityBar/>
            </StatisticsCard>
            <StatisticsCard
                title="Visibility"
                value={vis.toFixed(2)}
                unit="km"
            />
            <StatisticsCard
                title="Air Pressure"
                value={pres.toFixed(1)}
                unit="mb"
            />
        </div>
    );
}

export default TodaysHightlights;