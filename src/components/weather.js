import React from "react";

const Weather = (props) => {
    return (
        <div className="infoWeather">
            {props.city &&
                <div>
                    <div>
                        <p>{props.city}, {props.country}</p>
                        <p>{props.date.toString()}</p>
                    </div>
                    <div>
                        <div>
                            <img src={props.icon} alt="smth alt"/>
                            <p>Температура: {props.temp}&#176;</p>
                        </div>
                        <div>
                            <p>Feels like: {props.feels_like}&#176;</p>
                        </div>
                    </div>
                </div>
            }
            <p className="error">{props.error}</p>
        </div>
    );
}

export default Weather;