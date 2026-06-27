import './WeatherInfo.css';

export default function WeatherInfo({weatherData}){

  let style  = {textDecoration:'underline', color:"yellow"}

    if(!weatherData){
        return <h3 style={style}>Search new location or Get current location weather</h3>
    }

  return (
    <div className="weather-card">
      <h2>
        {weatherData.location.name}, {weatherData.location.country}
      </h2>

      <img
        src={weatherData.current.condition.icon}
        alt={weatherData.current.condition.text}
      />

      <h1>{weatherData.current.temp_c}°C</h1>

      <h3>{weatherData.current.condition.text}</h3>

      <hr />
      <hr />

      <p><strong>Feels Like:</strong> {weatherData.current.feelslike_c}°C</p>
      <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
      <p><strong>Wind:</strong> {weatherData.current.wind_kph} km/h</p>
      <p><strong>Pressure:</strong> {weatherData.current.pressure_mb} mb</p>
      <p><strong>UV Index:</strong> {weatherData.current.uv}</p>
      <p><strong>Last Updated:</strong> {weatherData.current.last_updated}</p>
    </div>
  )
}
