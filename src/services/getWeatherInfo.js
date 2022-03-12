import test from "../test.json";

async function getWeather ({lat = 0, lng=0, city=""}) {
  //by lat, lng: &lat=38.123&lon=-78.543
  const cityName = city ? `&city=${city}` : "";
  const cityCoords = (lat && lng) ? `&lat=${lat}&lon=${lng}` : ""; 
  //"https://api.weatherbit.io/v2.0/forecast/daily?&lat="+latitude+"&lon="+longitude+"&days=6&lang=es&key=b0e7e0cc236b462e9ee43b41c1276ee0"
  
  // by city: &city=Raleigh,NC
  // by city: &city=Raleigh,North+Carolina
  // url: `${process.env.REACT_APP_URL}city=Puebla,Mexico&days=6&key=${process.env.REACT_APP_API_KEY}`

  /* const url = `https://api.weatherbit.io/v2.0/forecast/daily?${cityName}${cityCoords}&days=6&key=b0e7e0cc236b462e9ee43b41c1276ee0`; */
  /* return fetch(url).then(response => response.json()).then(data => {
    const {city_name: name, country_code: code} = data;
    const [todayWeather, ...nextWeatherdays] = data.data;
    return {
      city: {name, code},
      todayWeather,
      nextDaysWeather: nextWeatherdays
    }
  }).catch((error) => {
    throw new Error(error)
  }); */
  const {city_name: name, country_code: code} = test;
  const [todayWeather, ...nextWeatherdays] = test.data;
  return {
    city: {name, code},
    todayWeather,
    nextDaysWeather: nextWeatherdays
  }
}

export default getWeather;