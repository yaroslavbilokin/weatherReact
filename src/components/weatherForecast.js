import React from "react";

const WeatherForecast = ({fiveDayForecast}) => {
    if (fiveDayForecast !== undefined) {
        const weatherBlocks = fiveDayForecast.map((day) => {
            const iconUrl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
            return (
                <div className="weatherBlock">
                    <img src={iconUrl} alt="smth alt"/>
                    <p>{day.main.temp}&#176;</p>
                    <p>Feels like: {day.main.feels_like} &#176;</p>
                    <p>Pressure: {day.main.pressure}</p>
                </div>
            );
        })
    return weatherBlocks; 
}
    return (
        <div></div>
    );

}

export default WeatherForecast;