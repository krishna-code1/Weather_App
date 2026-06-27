// Import useState hook for managing input state
import { useState } from 'react';
// Import CSS styling for search component
import './Search.css'

// Search component receives getWeather function as prop from parent component
export default function Search({ getWeather }){
    // State to store the user's input value in the search box
    const [inputValue,setInputValue] = useState("");

    // Handler function to update state when user types in the input field
    const handelInputChnage = (event)=>{
        // Get the current value from input field and update state
        setInputValue(event.target.value);
    }

    // Handler function to perform search when user clicks the Search button
    const handelSearch = ()=> {
        // Check if user has entered something (input is not empty)
        if(inputValue != ""){
          // Call the getWeather function with the city name
          getWeather(inputValue);
          // Clear the input field after search
          setInputValue("");
        } else{
            // Show alert if user tries to search without entering a location
            alert("Please Enter a location");
        }
    }

    // Handler function to perform search when user presses Enter key
    const handleKeyDown = (event) => {
      // Check if the pressed key is Enter and input field is not empty
      if (event.key === "Enter" && inputValue != "" ) {
          // Call getWeather function with the city name
          getWeather(inputValue);
          // Clear the input field after search
          setInputValue("");
      }
    };
    
    // Return JSX structure for the search interface
    return (
        <div>
            {/* Application title */}
            <h1>
              Weather App!
            </h1>

  
            
            {/* Input field for user to enter city/location name */}
            <input type="text" 
              placeholder="Search Location"
              className="input"
              value={inputValue}             // {/* Current input value from state */}
              onChange={handelInputChnage}   // {/* Update state when user types */}
              onKeyDown={handleKeyDown}      // {/* Handle Enter key press */}
            />

            {/* Line breaks for spacing */}
            <br /><br />
            
            {/* Search button - triggers handleSearch when clicked */}
            <button className='button' 
              onClick = {handelSearch}
            >
              Search
            </button>
        </div>
    )
}

