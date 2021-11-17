import "assets/styles/globals.scss";
import {icon_btn} from "assets/styles/IconButton.module.scss";

function IconButton({ children, cssClass="", handleClick}) {
  return (
    <button onClick={handleClick} className={`${icon_btn} ${cssClass}`}>
      {children}
    </button>
  );
}

export default IconButton;
