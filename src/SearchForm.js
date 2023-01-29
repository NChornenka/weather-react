import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './SearchForm.css';
import axios from "axios";


export default function SearchForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

    function getCity(event) {
    event.preventDefault();
    if (city.length > 2){
      searchCity();
          } else {
            alert("Enter a city, please")
          }
        }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      header: response.data.name
    });
  }

  function searchCity(event) {
    let apiKey = 'fdaeb70f86d9811e4917af5701e5fdf2';
    // let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleSubmit);
     }
  let form = (
    <form className="d-flex" role="search" onSubmit={getCity}>
      <input
        className="form-control"
        type="text"
        placeholder="City"
        aria-label="Search"
        onChange={updateCity}
      />
      <input className="btn btn-outline-success" type="submit"
        Search
      />
    </form>
  );

  let text = (
    <div className="text">
      <h1>{weather.header}</h1>
      <ul>
        <li>Temperature: {weather.temperature} °C </li>
        <li className="text-capitalize">Description: {weather.description}</li>
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
      <div className="SearchForm">
        <div>{form}</div>
        <div>{text}</div>
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}



















