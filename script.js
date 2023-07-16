const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '116a9247b5msh92f974dcfee62bfp167539jsnad82a01b3b1c',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather=(city)=>{
           cityName.innerHTML=city
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
  .then(response => {
    console.log(response);
    document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
    document.getElementById('temp').innerHTML = response.temp;
    document.getElementById('feels_like').innerHTML = response.feels_like;
    document.getElementById('humidity').innerHTML = response.humidity;
    document.getElementById('min_temp').innerHTML = response.min_temp;
    document.getElementById('max_temp').innerHTML = response.max_temp;
    document.getElementById('wind_speed').innerHTML = response.wind_speed;
    document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
    document.getElementById('sunrise').innerHTML = response.sunrise;
    document.getElementById('sunset').innerHTML = response.sunset;
  })
  .catch(err => console.error(err));
}
submit1.addEventListener("click",(e)=>{
  e.preventDefault()
getWeather(cityName1.value)
})

getWeather("Delhi")