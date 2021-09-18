import TextInfo from "../common/TextInfo";
import NavigationIcon from '@material-ui/icons/Navigation';

function WindDirection({direction}){
    return(
        <div className="wind-icon">
            <NavigationIcon className="icon air-dir"/>
            <TextInfo cssClass="air-dir" text={direction}/>
        </div>
    );
}

export default WindDirection;