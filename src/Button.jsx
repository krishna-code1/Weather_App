import './Search.css';
export default function Button({getCurrentweather}){
    return <button className="button1" onClick={getCurrentweather}>📍 Current Location Weather</button>
}