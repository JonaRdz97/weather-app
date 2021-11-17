import {btn} from "assets/styles/TodayWeather.module.scss";

function TextButton({ text, cssClass, handleClick}) {

  return (
    <button type="button" onClick={handleClick} className={`${btn} ${cssClass}`}>
      {text}
    </button>
  );
}

export default TextButton;
