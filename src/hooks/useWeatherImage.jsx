import { useState, useEffect } from "react";
import rain from "assets/img/rain.svg";
import thunderRain from "assets/img/thunder_rain.svg";
import thunderStorm from "assets/img/thunderstorm.svg";
import drizzle from "assets/img/drizzle.svg";
import heavyRain from "assets/img/heavy_rain.svg";
import showerRain from "assets/img/shower_rain.svg";
import snow from "assets/img/snow.svg";
import snowRain from "assets/img/snow_rain.svg";
import flurries from "assets/img/flurries.svg";
import mist from "assets/img/mist.svg";
import clear from "assets/img/clear.svg";
import fewClouds from "assets/img/few_clouds.svg";
import brokenClouds from "assets/img/broken_clouds.svg";
import overcastClouds from "assets/img/overcast_clouds.svg";

function useWeatherImage (code){
  const [image, setImage] = useState(rain);

  useEffect(() => {
    if (code >= 200 && code <=202) { 
      setImage(thunderRain);
    } else if(code>=230 && code <=233){
      setImage(thunderStorm);
    }else if(code >= 300 && code <=302){
      setImage(drizzle);
    }else if(code===500 || code===501 || code===511 || code===521 || code===522){
      setImage(rain);
    }else if(code===502){
      setImage(heavyRain);
    }else if(code===520){
      setImage(showerRain);
    }else if(code===600 || code===601 || code===602 || code===611 || code===612){
      setImage(snow);
    }else if(code===610 || code===621 || code===622){
      setImage(snowRain);
    }else if(code===623){
      setImage(flurries);
    }else if(code===700 || code===711 || code===721 || code===731 || code===741 || code===751){
      setImage(mist);
    }else if(code===800){
      setImage(clear);
    }else if(code===801 || code===802){
      setImage(fewClouds);
    }else if(code===803){
      setImage(brokenClouds);
    }else if(code===804){
      setImage(overcastClouds);
    }
  }, [code]);

  return image;
}

export default useWeatherImage;