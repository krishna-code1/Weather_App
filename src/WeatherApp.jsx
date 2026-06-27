import Button from "./Button";
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
          // console.log(data);
          if(data.error){
             alert("No matching location found");
            return;
          }
          setWeatherData(data);
        } catch(err){
            console.log(err);

        }
    };

    const getCurrentweather = ()=>{
      navigator.geolocation.getCurrentPosition(
        async(position) =>{
       const latitude  = position.coords.latitude;
       const longitude = position.coords.longitude;

       const url =  `https://api.weatherapi.com/v1/current.json?key=00aa31c4ad844bd8a99103758262803&q=${latitude},${longitude}&aqi=yes`;

         try{
          const resp  = await fetch(url);
          const data = await resp.json();
          //console.log(data);
          setWeatherData(data);
      
        } catch(err){
          return <h3>Server is not Respomding</h3>
        }
        },
        (error) =>{
          alert("Location access denied!");
          console.log(error);
        }
      );
    };

    return(
        <div>
             <Search getWeather={getWeather}/>
             <WeatherInfo weatherData= {weatherData}/>
             <Button getCurrentweather={getCurrentweather}/>
        </div>
    )
}