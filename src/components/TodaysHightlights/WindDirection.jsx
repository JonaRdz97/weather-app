import TextInfo from "components/common/TextInfo";
import {wind_icon, wind_dir} from "assets/styles/TodaysHightlights.module.scss";

function WindDirection({direction}){
    return(
        <div className={wind_icon}>
            <img className={`icon ${wind_dir}`} src="img/navigation-white.svg" alt="air direction icon"/>
            <TextInfo cssClass="air-dir" text={direction}/>
        </div>
    );
}

export default WindDirection;