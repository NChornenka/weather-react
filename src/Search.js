import React, { useState } from "react";
import './Search.css';
import axios from "axios";
// import bootsrtap from "bootstrap";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      header: response.data.name
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
     }
  let form = (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="City"
        aria-label="Search"
        onChange={updateCity}
      />
      <button className="btn btn-outline-success ms-2" type="submit">
        Search
      </button>
    </form>
  );

  let text = (
    <div className="text">
      <h1>{weather.header}</h1>
      <ul>
        <li>Temperature: {weather.temperature} °C </li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity} %</li>
        <li>Wind: {weather.wind} m/s</li>
      </ul>
      <div className="link">
      <a href="https://github.com/NChornenka/weather-react">opensource code</a> by Natalia Ch
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="search">
        <div>{form}</div>
        <div>{text}</div>
      </div>
    );
  } else {
    return <div className="search">{form}</div>;
  }
}
