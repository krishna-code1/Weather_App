import { useState } from 'react';
import './Search.css'

export default function Search({ getWeather }){
    const [inputValue,setInputValue] = useState("");

    const handelInputChnage = (event)=>{
        setInputValue(event.target.value);
    }

    const handelSearch = ()=> {
        if(inputValue != ""){
          getWeather(inputValue);
          setInputValue("");
        } else{
            alert("Please Enter a location");
        }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Enter" && inputValue != "" ) {
          getWeather(inputValue);
          setInputValue("");
      }
    };
    
    return (
        <div>
            <h1>
              Weather App!
            </h1>

            <input type="text" 
              placeholder="Search Location"
              className="input"
              value={inputValue}
              onChange={handelInputChnage}
              onKeyDown={handleKeyDown}
            />

            <br /><br />
            
            <button className='button' 
              onClick = {handelSearch}
            >
              Search
            </button>
        </div>
    )
}

