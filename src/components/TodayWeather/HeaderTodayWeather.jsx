import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import TextButton from "components/common/TextButtton";
import { openSearchLocation } from "redux/reducers/appModeReducer";
import IconButton from "components/common/IconButton";
import {btnSearch, headerTodayWeather} from "assets/styles/TodayWeather.module.scss";
import currentLocationIcon from "assets/img/current-location-white.svg"

const getWeatherByGeoLocation = ({coords}) => {
  const {latitude, longitude} = coords;
  // TODO hacer peticion con estos valores
  console.log("Haciendo petición con:");
  console.log("lat:", latitude);
  console.log("lng:", longitude);
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
    //console.log("hacer peticion con geolocalizacion html")
    /**
     * latitude = position.coords.latitude.toString();
    longitude = position.coords.longitude.toString();
    url = "https://api.weatherbit.io/v2.0/forecast/daily?&lat="+latitude+"&lon="+longitude+"&days=6&lang=es&key=b0e7e0cc236b462e9ee43b41c1276ee0"
    get_data(url);
     */
  }

  const handleClickSearch = () => {
    console.log("abierto");
    dispatch(openSearchLocation());
  };

  return (
    <div className={headerTodayWeather}>
      <TextButton cssClass={btnSearch} text="Search for places" handleClick={handleClickSearch}/>
      <IconButton handleClick={handleGetLocation}>
        <img className="icon" src={currentLocationIcon} alt="Gps icon"/>
      </IconButton>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

export default HeaderTodayWeater;
