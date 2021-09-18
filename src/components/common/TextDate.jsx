import { DateTime } from "luxon";

function TextDate({cssClass, date="", text=""}){
    return(
        <p className={cssClass}>
            {`${text}${DateTime.fromISO(date).toFormat("ccc, dd LLL")}`}
        </p>
    );   
}

export default TextDate;