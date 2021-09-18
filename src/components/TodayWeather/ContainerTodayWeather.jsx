import HeaderTodayWeater from "./HeaderTodayWeather";
import InfoTodayWeather from "./InfoTodayWeather";

function ContainerTodayWeather(){
    return(
        <div className="now">
            <HeaderTodayWeater/>
            <InfoTodayWeather/>
        </div>
    );
}

export default ContainerTodayWeather;