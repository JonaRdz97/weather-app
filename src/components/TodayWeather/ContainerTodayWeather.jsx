import { useSelector } from "react-redux";
import LocationSearch from "./LocationSearch";
import HeaderTodayWeater from "./HeaderTodayWeather";
import InfoTodayWeather from "./InfoTodayWeather";
import { weatherNowContainer } from "assets/styles/TodayWeather.module.scss";

function ContainerTodayWeather() {
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);
  const isSearchLocation = useSelector((state) => state.myModeReducer.isSearchLocation);
  // TODO cambiar el nombre de la clase change-color por una más descriptiva
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