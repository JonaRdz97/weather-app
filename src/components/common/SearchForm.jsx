import { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { closeSearchLocation } from "redux/reducers/appModeReducer";
import { input_search, btn_search_location, form_styles, search_icon, input_container } from "assets/styles/SearchForm.module.scss";
import searchIcon from "assets/img/search-icon.svg";

const toastOptions = {
  duration: 4000,
  style: {
    background: '#333',
    color: '#fff',
  },
}

export default function SearchForm({onSubmit}) {

  const dispatch = useDispatch()
  const [location, setLocation] = useState("");
  const locationReg = /[a-z]{3,}(,\s[a-z])?/i;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (locationReg.test(location)) {
      const formatedLocation = location.trim().replaceAll(" ", "+");
      onSubmit(formatedLocation);
      dispatch(closeSearchLocation());
    }else{
      toast.error("Please type a valid city name");
    }
    setLocation("");
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <form className={form_styles}>
        <div className={input_container}>
          <input type="text" placeholder="e.g. Madrid, Spain" className={input_search} id="input-city" onChange={handleChange} value={location}/>
          <img className={search_icon} src={searchIcon} alt="Search icon"/>
        </div>
        <button type="submit" className={btn_search_location} onClick={handleSubmit}>Search</button>
      </form>
      <Toaster toastOptions={toastOptions}/>
    </>
  );
}