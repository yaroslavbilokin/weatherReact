import React from "react";

const Weather = (props) => {
    return (
        <div className="infoWeather">
            {props.city &&
                <div>
                    <img src={props.icon} alt="smth alt"/>
                    <p>Розміщення: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp}</p>
                    <p>Тиск: {props.pressure} мм.рт.ст.</p>
                    <p>Захід сонця: {props.sunset}</p>
                </div>
            }
            <p className="error">{props.error}</p>
        </div>
    );
}

export default Weather;