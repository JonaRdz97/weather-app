import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import TextButton from "components/common/TextButtton";
import { openSearchLocation } from "redux/reducers/appModeReducer";
import IconButton from "components/common/IconButton";
import {btnSearch, headerTodayWeather} from "assets/styles/TodayWeather.module.scss";

function HeaderTodayWeater() {
  const dispatch = useDispatch();

  const handleGetLocation = () => {
    console.log("HOLA")
    toast.error('User denied access location');
  }

  const handleClickSearch = () => {
    console.log("abierto");
    dispatch(openSearchLocation());
  };

  return (
    <div className={headerTodayWeather}>
      <TextButton cssClass={btnSearch} text="Search for places" handleClick={handleClickSearch}/>
      <IconButton handleClick={handleGetLocation}>
        <img className="icon" src="img/current-location-white.svg" alt="Gps icon"/>
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
