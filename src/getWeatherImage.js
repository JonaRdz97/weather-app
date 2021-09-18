function getImageWeather(code){
    if (code===200 || code===201 || code===202) {
        return "thunder_rain.svg"
    } else if(code===230 || code===231 || code===232 || code===233){
        return "thunderstorm.svg"
    }else if(code===300 || code===301 || code===302){
        return "drizzle.svg"
    }else if(code===500 || code===501 || code===511 || code===521 || code===522){
        return "rain.svg"
    }else if(code===502){
        return "heavy_rain.svg"
    }else if(code===520){
        return "shower_rain.svg"
    }else if(code===600 || code===601 || code===602 || code===611 || code===612){
        return "snow.svg"
    }else if(code===610 || code===621 || code===622){
        return "snow_rain.svg"
    }else if(code===623){
        return "flurries.svg"
    }else if(code===700 || code===711 || code===721 || code===731 || code===741 || code===751){
        return "mist.svg"
    }else if(code===800){
        return "clear.svg"
    }else if(code===801 || code===802){
        return "few_clouds.svg"
    }else if(code===803){
        return "broken_clouds.svg"
    }else if(code===804){
        return "overcast_clouds.svg"
    }else{
        return "rain.svg"
    }
}

export default getImageWeather;