function WeatherImage({cssClass, srcImage, altImage=""}){
    return <img className={cssClass} src={srcImage} alt={altImage}/>
}

export default WeatherImage;