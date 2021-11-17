import { useSelector, useDispatch} from "react-redux";
import { closeSearchLocation } from "redux/reducers/appModeReducer";
import SearchForm from "components/common/SearchForm";
import { close_styles, search_location } from "assets/styles/TodayWeather.module.scss";

function getWeather({location}){
  console.log("Haciendo Peticion con ", location)
}

export default function LocationSearch(){
  
  const dispatch = useDispatch();
  const isSearchLocation = useSelector((state) => state.myModeReducer.isSearchLocation);

  const handleSubmit = ({location}) => {
    // hacer peticion con la locaión
    getWeather({location});
  }

  return(
    <div className={`${isSearchLocation ? "openContainer" : "closeContainer"} ${search_location}`}>
      { /* Cambiar por boton */}
      <img src="./img/close.svg" alt="close-icon" className={close_styles} id="exit" onClick={() => dispatch(closeSearchLocation()) }/>
      <SearchForm onSubmit={handleSubmit}/>
    </div>
  );
}