import React from "react";

// class CurrentDayWeather extends React.Component {
//     render() {
//         return(
//             <div>

//             </div>
//         );
//     }
// }

const CurrentDayWeather = ({currentDayWeather}) => {
    if (currentDayWeather !== undefined) {
        const currentWeatherBlocks = currentDayWeather.map((weather) => {
            const iconUrl = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
            return (
                <div className="weatherPerHour">
                    <img src={iconUrl} alt={weather.weather[0].description}/>
                    <p>{weather.main.temp}&#176;</p>
                    <p>{weather.main.feels_like}&#176;</p>
                    <p>{weather.dt_txt.slice(11, 16)}</p>
                </div>
            );
        })
        return currentWeatherBlocks;
    } else {
        return (
            <div>

            </div>
        );
    }
}

export default CurrentDayWeather;