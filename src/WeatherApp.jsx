import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        feelslike: 23.72,
        humidity: 79,
        temp: 23.27,
        tempMax: 23.8,
        tempMin: 22.79,
        weather: "scattered clouds"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <>
        <h1 style={{textAlign: "center"}}>Know Weather</h1>
        <SearchBox updateWeather={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    );
}