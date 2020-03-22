import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"

const API_KEY = "9252cbb87e904af3fa32880898422f10";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    icon: undefined
  };

  gettingWeather = async (e) => {
      e.preventDefault();
      //5days - Forecast
      // const api_url = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?q=Kiev&appid=${API_KEY}`
      // );
      const city = e.target.elements.city.value;
      
      if(city) {
        const api_url = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        console.log(data);
        const weather = data.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        const sunset = data.sys.sunset;
        const date = new Date(sunset*1000);
        const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(sunset_date)
          
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: "",
          icon: iconUrl
        });
        
      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Введіть назву міста!"
        })
      }

      
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather}/>
                <Weather 
                  temp={Math.floor(this.state.temp)}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={Math.floor(this.state.pressure*0.750062)}
                  sunset={this.state.sunset}
                  icon={this.state.icon}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;