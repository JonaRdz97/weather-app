import { useSelector } from "react-redux";
import TextInfo from "components/common/TextInfo";
import WindDirection from "./WindDirection";
import HumidityBar from "./HumidityBar";
import StatisticsCard from "./StatisticsCard";
import {
  today_statistics,
  statistics_container,
  statistic_card,
  today_hightlights_title,
} from "assets/styles/TodaysHightlights.module.scss";

function TodaysHightlights() {
  const { wind_cdir, wind_spd, rh, vis, pres } = useSelector(
    (state) => state.myWeatherReducer.currentWeather
  );

  if (!wind_spd) {
    return <h1>Cargando . . .</h1>;
  }

  return (
    <div className={today_statistics}>
      <TextInfo cssClass={today_hightlights_title} text="Today's Hightlights" />
      <div className={statistics_container}>
        <StatisticsCard
          cssClass={statistic_card}
          title="Wind status"
          value={wind_spd.toFixed(1)}
          unit="m/s"
        >
          <WindDirection direction={wind_cdir} />
        </StatisticsCard>
        <StatisticsCard
          cssClass={statistic_card}
          title="Humidity"
          value={rh}
          unit="%"
        >
          <HumidityBar />
        </StatisticsCard>
        <StatisticsCard
          cssClass={statistic_card}
          title="Visibility"
          value={vis.toFixed(1)}
          unit="km"
        />
        <StatisticsCard
          cssClass={statistic_card}
          title="Air Pressure"
          value={pres.toFixed(1)}
          unit="mb"
        />
      </div>
    </div>
  );
}

export default TodaysHightlights;
