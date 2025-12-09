import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";


 
export default function WeatherSearchEngine (){
    let [city,setCity]= useState("")
    let [weather, setWeather]= useState(null);
    let[loading,setLoading]=useState(false);

  function showWeather(response){
     setWeather({
        temperature:response.data.main.temp,
        humidity: response.data.main.humidity,
        wind:response.data.wind.speed,
        icon:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        description:response.data.weather[0].description,
     });

  }
  function handleSubmit(event){
    event.preventDefault();
    if(city.trim().length === 0)return;

    setLoading(true);
    let apiKey = "c819171fe0abdc14039af4ef5dda283b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
        showWeather(response);
        setLoading(false);
    });
  }
  function updateCity(event){
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit = {handleSubmit}>
    <input type="search" placeholder="Enter a City.." onChange={updateCity}/>
    <button type="submit">Search</button>
    </form>
  );
  if (loading){
    return(
        <div className="loaderIcon">
            <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={loading}
      />
        </div>
    );
  }
  if (weather){
    return(
        <div>
            {form}
            <ul className="formLayout">
              <li>Temperature:{Math.round(weather.temperature)}°C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind-Speed: {weather.wind}km/h</li>
              <li>Description: {weather.description}</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
            </ul>
        </div>
    );
  }
  return form;
}
