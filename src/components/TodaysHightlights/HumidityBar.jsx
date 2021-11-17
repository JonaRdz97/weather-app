import { humidity_bar_container, humidity_percentage, humidity_bar, humidity } from "assets/styles/HumidityBar.module.scss";

function HumidityBar(){
    return(
        <div className={humidity_bar_container}>
            <div className={humidity_percentage}>
                <p>0</p>
                <p>50</p>
                <p>100</p>
            </div> 
            <div className={humidity_bar}>
                <div className={humidity}></div>
            </div>        
        </div>
    );
}

export default HumidityBar;