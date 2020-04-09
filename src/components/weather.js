import React from "react";

const Weather = (props) => {
    return (
        <div className="infoWeather">
            {props.city &&
                <div>
                    <div>
                        <div className="icon-temp-block">
                            <h1>{props.temp}&#176;</h1>
                            <img className="current-weather-icon" src={props.icon} alt="smth alt"/>
                        </div>
                        <h3>{props.city}, {props.country}</h3>
                        <p className="current-date">{props.date.toString()}</p>
                    </div>
                    <div>
                        
                        <div>
                            <p>Відчувається як: {Math.floor(props.feels_like)}&#176;</p>
                        </div>
                    </div>
                </div>
            }
            <p className="error">{props.error}</p>
        </div>
    );
}

export default Weather;