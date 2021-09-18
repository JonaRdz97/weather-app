import TextButton from "../common/TextButtton";
import MyIconButton from "../common/MyIconButton";
import GpsFixedRoundedIcon from '@material-ui/icons/GpsFixedRounded';

function HeaderTodayWeater(){
    return(
        <div className="header">
            <TextButton text="Search for places"/>
            <MyIconButton icon={<GpsFixedRoundedIcon/>}/>
        </div>
    );
}

export default HeaderTodayWeater;