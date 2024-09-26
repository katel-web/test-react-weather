import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 18,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 66,
    wind: 3.13,
  };
  return (
    <div className="Weather">
      <header>
        <form className="weather-app-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="weather-app-input"
          />
          <input type="submit" value="Search" className="weather-app-search" />
        </form>
      </header>
      <main>
        <div className="weather-city">
          <div>
            <h1 className="city-name">{weatherData.city}</h1>
            <p className="weather-city-details">
              <span>Last updated: {weatherData.date}</span>,
              <span>{weatherData.description} </span>
              <br />
              Humidity:{" "}
              <strong>
                {" "}
                <span>{weatherData.humidity}</span>%
              </strong>{" "}
              , Wind
              <strong>
                <span> {weatherData.wind}</span>km/h
              </strong>
            </p>
          </div>
          <div className="weather-app-temp-container">
            <div>
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </div>
            <div className="app-temperature">{weatherData.temperature}</div>
            <div className="app-units">°C</div>
          </div>
        </div>
      </main>

      <div className="weather-forecast"></div>
      <footer>
        Coded by
        <a href="https://github.com/katel-web" target="_blank">
          Kate Lemass
        </a>
        , is open-sourced on
        <a
          href="https://github.com/katel-web/WeatherAppProject"
          target="_blank"
        >
          GitHub
        </a>
        and hosted on
        <a href="https://kates-weather-app.netlify.app/" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}
