import { useSelector } from "react-redux";
import LocationSearch from "./LocationSearch";
import HeaderTodayWeater from "./HeaderTodayWeather";
import InfoTodayWeather from "./InfoTodayWeather";
import { weatherNowContainer } from "assets/styles/TodayWeather.module.scss";

function ContainerTodayWeather() {
  
  const isSearchLocation = useSelector((state) => state.myModeReducer.isSearchLocation);
  
  return (
    <div className={`${weatherNowContainer} dkmode`}>
      {isSearchLocation ? (
        <LocationSearch />
      ) : (
        <>
          <HeaderTodayWeater />
          <InfoTodayWeather />
        </>
      )}
    </div>
  );
}

export default ContainerTodayWeather;