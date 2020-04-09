import React from "react";

const WeatherForecast = ({fiveDayForecast}) => {
    if (fiveDayForecast !== undefined) {
        const weatherBlocks = fiveDayForecast.map((day) => {
            const iconUrl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
            return (
                <div key={day.dt} className="weatherBlock">
                    <div className="icon-temp-block">
                        <img src={iconUrl} alt="smth alt"/>
                        <h5>{Math.floor(day.main.temp)}&#176;</h5>
                    </div>
                    <p>Відчувається: {Math.floor(day.main.feels_like)}&#176;</p>
                    <p>Тиск: {day.main.pressure}</p>
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