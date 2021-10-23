import { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { closeSearchLocation } from "redux/reducers/appModeReducer";

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
    <form style={{ border: "1px solid red" }}>
      <input
        type="text"
        placeholder="e.g. Madrid, Spain"
        className="input-search"
        id="input-city"
        onChange={handleChange}
        value={location}
      />
      <button type="submit" className="btn-search-loc" onClick={handleSubmit}>
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
