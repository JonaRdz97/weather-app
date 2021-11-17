import { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { closeSearchLocation } from "redux/reducers/appModeReducer";
import { input_search, btn_search_location, form_styles } from "assets/styles/SearchForm.module.scss";

export default function SearchForm({onSubmit}) {
  // const dispatch = useDispatch()
  const [location, setLocation] = useState("");
  const locationReg = /[a-z]{3,}(,\s[a-z])?/i;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("EL VALOR A BUSCAR", location);
    console.log(typeof(onSubmit))
    console.log("SUBMIT TIENE", onSubmit);
    if (locationReg.test(location)) {
      // hacer la peticion con el nombre del imput
      onSubmit({location});
      // dispatch(closeSearchLocation());
      // a continuacion cerrar el componente para buscar
    }else{
      // mostrar alerta con error
      toast.error("Please type a valid city name");
    }
    setLocation("");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setLocation(event.target.value);
  };

  return (
    <form className={form_styles}>
      <input
        type="text"
        placeholder="e.g. Madrid, Spain"
        className={input_search}
        id="input-city"
        onChange={handleChange}
        value={location}
      />
      <button type="submit" className={btn_search_location} onClick={handleSubmit}>
        Search
      </button>
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
    </form>
  );
}
