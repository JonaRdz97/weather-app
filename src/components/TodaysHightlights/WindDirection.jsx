import NavigationIcon from '@material-ui/icons/Navigation';
import TextInfo from "components/common/TextInfo";

function WindDirection({direction}){
    return(
        <div className="wind-icon">
            <NavigationIcon className="icon air-dir"/>
            <TextInfo cssClass="air-dir" text={direction}/>
        </div>
    );
}

export default WindDirection;