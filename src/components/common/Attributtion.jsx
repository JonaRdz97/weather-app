import { useSelector } from 'react-redux';
import { attribution, attribution_name, attribution_dev } from "assets/styles/Attribution.module.scss"

function Attribution(){
        
    const currentMode = useSelector((state) => state.myModeReducer.currentMode);

    return(
        <footer className={`${ currentMode === "light" ? "attribution" : ""}`}>
            <p className={attribution}>Created by 
                <a className={`${ currentMode === "light" ? "light-att" : ""} ${attribution_name}`} href="https://github.com/JonaRdz97" target="_blank" rel="noopener noreferrer"> Jonathan Rodríguez</a> -  
                <a className={`${ currentMode === "light" ? "light-dev-att" : ""} ${attribution_dev}`} href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer"> devChallenges.io</a>
            </p>
        </footer>
    );
}

export default Attribution;