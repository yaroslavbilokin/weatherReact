import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import WeatherForecast from "./components/weatherForecast";

const API_KEY = "9252cbb87e904af3fa32880898422f10";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    date: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    feels_like: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    icon: undefined,
    fiveDayForecast: undefined
  };

  gettingWeather = async (e) => {
      e.preventDefault();

      
     

      const city = e.target.elements.city.value;
      
      if(city) {

        //5days - Forecast
        const weather_api = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const five_days_data = await weather_api.json();
        const weatherList = five_days_data.list;

        const fiveDayForecast = weatherList.filter((obj) => {
          return obj.dt_txt.includes("12:00:00")
        }) 
        console.log(fiveDayForecast)



        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        console.log(data)
        const weather = data.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        const sunset = data.sys.sunset;
        const sunset_unix_date = new Date(sunset*1000);
        const realTime = new Date(data.dt*1000);

        const sunset_date = sunset_unix_date.getHours() + ":" + sunset_unix_date.getMinutes() + ":" + sunset_unix_date.getSeconds();
        this.setState({
          temp: data.main.temp,
          city: data.name,
          date: realTime,
          country: data.sys.country,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          feels_like: data.main.feels_like,
          sunset: sunset_date,
          error: "",
          icon: iconUrl,
          fiveDayForecast: fiveDayForecast
        });
        console.log(this.state)
        console.log(this.state.date)
        
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          date: undefined,
          country: undefined,
          humidity: undefined,
          wind: undefined,
          feels_like: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Введіть назву міста!",
          fiveDayForecast: undefined
        })
      }

      
  }
  
  render() {
    const {fiveDayForecast} = this.state;
    return (
      
          <div className="container">
              <div className="info">
                <Info />
              </div>
              <div className="form">
                <Form weatherMethod={this.gettingWeather}/>
              </div>
              <Weather 
                  temp={Math.floor(this.state.temp)}
                  city={this.state.city}
                  date={this.state.date}
                  country={this.state.country}
                  feels_like={this.state.feels_like}
                  pressure={Math.floor(this.state.pressure*0.750062)}
                  sunset={this.state.sunset}
                  icon={this.state.icon}
                  error={this.state.error}
                />
              <div className="row">
                <WeatherForecast fiveDayForecast={fiveDayForecast}/>
              </div>
              </div>
    );
  }
}

export default App;