import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherData,setWeatherData] = useState(null);

    const getWeather = async (city)=>{
      const url = `https://api.weatherapi.com/v1/current.json?key=00aa31c4ad844bd8a99103758262803&q=${city}&aqi=yes`;

        try{
        const resp  = await fetch(url);
        const data = await resp.json();
        setWeatherData(data);
      
     } catch(err){
        console.log("Error", err);
     }
    
}

    return(
        <div>
             <Search getWeather={getWeather}/>
             <WeatherInfo weatherData= {weatherData}/>
            
        </div>
       
    )
}