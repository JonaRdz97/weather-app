async function getWeather (url) {
  return fetch(url).then(response => response.json()).then(data => {
    const {city_name: name, country_code: code} = data;
    const [todayWeather, ...nextWeatherdays] = data.data;
    return {
      city: {name, code},
      todayWeather,
      nextDaysWeather: nextWeatherdays
    }
  }).catch((error) => console.log("Ha ocurrido un error inesperado :(", error));
}

export default getWeather;