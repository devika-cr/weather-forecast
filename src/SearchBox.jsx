import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateWeather}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "db6ab01d9f5f800d02116090c3bc059b";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    let getWeatherInfo =  async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            let result = {
                city: city,
                feelslike: jsonresponse.main.feels_like,
                temp: jsonresponse.main.temp, 
                tempMin: jsonresponse.main.temp_min,
                tempMax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                weather: jsonresponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
        
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateWeather(newInfo);
            setCity("");
            setError(false);
        } catch(err) {
            setError(true);
        }
       
    };
    
    let handleCity = (event) => {
        setCity(event.target.value);
    }

    return(
        <div className="searchbox">
            <form onSubmit={handleSubmit }>
                <TextField id="city" 
                 label="City Name" 
                 variant="outlined"
                 onChange={handleCity} required/>
                <br/><br/>
                <Button variant="contained" type="submit">Search</Button>       
                {error && <p style={{color: "red"}}>No such place exists!!!</p>}     
            </form>
        </div>
    );
}