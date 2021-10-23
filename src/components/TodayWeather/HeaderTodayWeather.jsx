import toast, { Toaster } from 'react-hot-toast';
import GpsFixedRoundedIcon from "@material-ui/icons/GpsFixedRounded";
import { useDispatch } from "react-redux";
import TextButton from "components/common/TextButtton";
import { openSearchLocation } from "redux/reducers/appModeReducer";
import MyIconButton from "components/common/MyIconButton";

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
    <div className="header">
      <TextButton text="Search for places" handleClick={handleClickSearch}/>
      <MyIconButton icon={<GpsFixedRoundedIcon />} handleClick={handleGetLocation}/>
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
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
