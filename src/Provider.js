//const url = './test.json' ;

/* function getWeather(){
    return  fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(data => {return data});
}

export default getWeather; */

import data from "./test.json";

const weather = {
  /* city: {},
  todayWeather: {},
  nextDaysWeather: [], */
};

async function getWeather() {
  //console.log(data);
  weather.city = { name: data.city_name, code: data.country_code };
  weather.todayWeather = data.data[0];
  weather.nextDaysWeather = data.data.slice(1);
  return weather;
}
