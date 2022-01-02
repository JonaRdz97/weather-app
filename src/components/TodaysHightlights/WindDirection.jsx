import TextInfo from "components/common/TextInfo";
import {wind_icon, wind_dir} from "assets/styles/TodaysHightlights.module.scss";
import windDirImg from "assets/img/navigation-white.svg";

function WindDirection({direction, degrees}){
    return(
        <div className={wind_icon}>
            <img style={{transform: `rotate(${degrees}deg)`}}  className={`icon ${wind_dir}`} src={windDirImg} alt="wind direction icon"/>
            <TextInfo cssClass="air-dir" text={direction}/>
        </div>
    );
}

export default WindDirection;