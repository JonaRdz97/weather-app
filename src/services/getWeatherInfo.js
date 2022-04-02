async function getWeather ({lat = 0, lng=0, city=""}) {
  
  const cityName = city ? `&city=${city}` : "";
  const cityCoords = (lat && lng) ? `&lat=${lat}&lon=${lng}` : ""; 

  const url = `https://api.weatherbit.io/v2.0/forecast/daily?${cityName}${cityCoords}&days=6&key=b0e7e0cc236b462e9ee43b41c1276ee0`;
  return fetch(url).then(response => response.json()).then(data => {
    const {city_name: name, country_code: code} = data;
    const [todayWeather, ...nextWeatherdays] = data.data;
    return {
      city: {name, code},
      todayWeather,
      nextDaysWeather: nextWeatherdays
    }
  }).catch((error) => {
    throw new Error(error)
  });
}

export default getWeather;