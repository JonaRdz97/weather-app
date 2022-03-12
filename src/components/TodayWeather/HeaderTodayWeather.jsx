import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import TextButton from "components/common/TextButtton";
import { openSearchLocation } from "redux/reducers/appModeReducer";
import IconButton from "components/common/IconButton";
import {btnSearch, headerTodayWeather} from "assets/styles/TodayWeather.module.scss";
import currentLocationIcon from "assets/img/current-location-white.svg"
import getWeather from 'services/getWeatherInfo';

const toastOptions = {
  duration: 4000,
  style: {
    background: '#333',
    color: '#fff',
  },
}

const getWeatherByGeoLocation = async ({coords}) => {
  const {latitude, longitude} = coords;
  try {
    await getWeather({lat: latitude, lng: longitude});
  } catch (error) {
    toast.error(error.message.toString());
  }
}

function HeaderTodayWeater() {
  const dispatch = useDispatch();

  const handleGetLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherByGeoLocation, (error) => {
        toast.error(error.message.toString());
      })
    } else {
      toast.error("Your browser doesn't support geolocation")
    }
  }

  const handleClickSearch = () => {
    dispatch(openSearchLocation());
  };

  return (
    <div className={headerTodayWeather}>
      <TextButton cssClass={btnSearch} text="Search for places" handleClick={handleClickSearch}/>
      <IconButton handleClick={handleGetLocation}>
        <img className="icon" src={currentLocationIcon} alt="Gps icon"/>
      </IconButton>
      <Toaster toastOptions={toastOptions}/>
    </div>
  );
}

export default HeaderTodayWeater;