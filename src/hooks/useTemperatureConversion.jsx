import { useSelector } from "react-redux";

function useTemperatureConversion(temperature=0){
  
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);

  if(currentMode === "f"){
    return Math.round((temperature * 1.8) + 32);
  }else if(currentMode === "c"){
    return Math.round(temperature);
  }
  
}

export default useTemperatureConversion;