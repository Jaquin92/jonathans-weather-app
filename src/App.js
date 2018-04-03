import React, { Component } from "react";
import "./App.css";
import axios from "axios";



class App extends Component {
  constructor() {
    super();


    this.state = {
      zip: "",
      weather: undefined,
      city: "",

    };
  }
  getWeather(zip) {

    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=67489deefb53131dd440a9d98e4bd37c`)
      .then(r => {

        this.setState({ weather: r.data, city: r.data.name, zip: "" });



      })
      .catch(() => alert("Invalid Zip Code Bro"));
  }


  render() {


    let condition
    let icon
    let temp
    if (this.state.weather) {
      condition = this.state.weather.weather[0].description.toUpperCase()
      icon = this.state.weather.weather[0].icon
      temp = `${Math.floor(this.state.weather.main.temp)}°F`
    }

    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://cdn2.iconfinder.com/data/icons/lovely-weather-icons/32/Thermometer-75-512.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">
            Jonathan's Weather App <br />
            {this.state.city ?
              <span>{this.state.city}</span> : <span>Enter Zip</span>}
          </h1>
        </header>

        <input
          onChange={e => this.setState({ zip: e.target.value })}
          type="text"
          value={this.state.zip}
          placeholder="Zip"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.getWeather(this.state.zip)
            }
          }}
        />
        <button onClick={() => this.getWeather(this.state.zip)} >Get Weather</button>
        <div className="Wbody">
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
          <span>{condition}</span>
          <span>{temp}</span>

        </div>
      </div>
    );
  }
}

export default App;
