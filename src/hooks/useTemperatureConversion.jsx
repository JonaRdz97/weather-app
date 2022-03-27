import { useSelector } from "react-redux";

function useTemperatureConversion(temperature=0){
  const currentMode = useSelector((state) => state.myModeReducer.currentMode);

  if(currentMode === "f"){
    return ((temperature * 1.8) + 32).toFixed();
  }else if(currentMode === "c"){
    return temperature.toFixed();
  }
  
}

export default useTemperatureConversion;