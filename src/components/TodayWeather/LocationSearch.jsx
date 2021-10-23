import { useSelector, useDispatch} from "react-redux";
import { closeSearchLocation } from "redux/reducers/appModeReducer";
import SearchForm from "components/common/SearchForm";

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
    <div id="search-location" className={isSearchLocation ? "openContainer" : "closeContainer"}>
      { /* Cambiar por boton */}
      <img src="./img/close.svg" alt="close-icon" className="close" id="exit" onClick={() => dispatch(closeSearchLocation()) }/>
      <SearchForm onSubmit={handleSubmit}/>
    </div>
  );
}