import { useSelector } from "react-redux";
import HeaderTodayWeater from "./HeaderTodayWeather";
import InfoTodayWeather from "./InfoTodayWeather";

function ContainerTodayWeather(){
    
    const currentMode = useSelector((state) => state.myModeReducer.currentMode);
    // TODO cambiar el nombre de la clase change-color por una más descriptiva
    return(
        <div className={`now ${ currentMode === "light" ? "change-color1" : ""}`}>
            <HeaderTodayWeater/>
            <InfoTodayWeather/>
        </div>
    );
}

export default ContainerTodayWeather;