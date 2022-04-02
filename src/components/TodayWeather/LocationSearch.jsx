import toast from 'react-hot-toast';
import { useSelector, useDispatch} from "react-redux";
import { setCurrentWeather, setCityName, setNextDaysWeather } from "redux/reducers/weatherReducer";
import { closeSearchLocation } from "redux/reducers/appModeReducer";
import SearchForm from "components/common/SearchForm";
import { close_styles, search_location } from "assets/styles/TodayWeather.module.scss";
import closeIcon from "assets/img/close.svg";
import getWeather from "services/getWeatherInfo";
import IconButton from 'components/common/IconButton';

export default function LocationSearch(){
  
  const dispatch = useDispatch();
  const isSearchLocation = useSelector((state) => state.myModeReducer.isSearchLocation);

  async function getWeatherInfo(location){
    try {
      const {todayWeather, city, nextDaysWeather} = await getWeather({city: location});
      dispatch(setCurrentWeather(todayWeather));
      dispatch(setCityName(city));
      dispatch(setNextDaysWeather(nextDaysWeather));
    } catch (error) {
      toast.error("Country not found");
    }
  }

  const handleSubmit = (location) => {
    getWeatherInfo(location);
  }

  return(
    <div className={`${isSearchLocation ? "openContainer" : "closeContainer"} ${search_location}`}>
      <IconButton cssClass={close_styles} handleClick={() => dispatch(closeSearchLocation())}>
        <img src={closeIcon} alt="close-icon" id="exit"/>
      </IconButton>
      <SearchForm onSubmit={handleSubmit}/>
    </div>
  );
}