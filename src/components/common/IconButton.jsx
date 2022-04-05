import "assets/styles/global.scss";
import { icon_btn } from "assets/styles/IconButton.module.scss";

function IconButton({ children, cssClass="", handleClick}) {
  return (
    <button onClick={handleClick} className={`${cssClass} ${icon_btn}`}>
      {children}
    </button>
  );
}

export default IconButton;
