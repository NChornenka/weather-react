import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);







//   export default function Search(props) {
//   const [city, setCity] = useState(props.city);
//   const [weather, setWeather] = useState({ready:false});


//   function updateCity(event) {
//     setCity(event.target.value);
//   }

//   function showTemperature(response) {
//     console.log(response);
//     setWeather({
//       temperature: Math.round(response.data.main.temp),
//       description: response.data.weather[0].description,
//       humidity: response.data.main.humidity,
//       wind: Math.round(response.data.wind.speed),
//       header: response.data.name,
//       date: new Date (response.data.dt*1000),
//       icon: response.data.weather[0].icon,

//     });
//   }

//   function searchCity() {
//     let apiKey = "d682095eed5d0971ffeaf2a35ab9e196";
//     let units = "metric";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//     axios.get(apiUrl).then(showTemperature);
//     }



//   function handleSubmit(event) {
//     event.preventDefault();
//     if (city.length > 2){
//       searchCity();
//           } else {
//             alert("Enter a city, please")
//           }
//         }
  

//   let form = (
//     <form className="d-flex" role="search" onSubmit={handleSubmit}>
//       <input
//         className="form-control"
//         type="text"
//         placeholder="City"
//         aria-label="Search"
//         onChange={updateCity}
//       />
//       <input className="btn btn-outline-success" type="submit"
//         Search
//       />
//     </form>
//   );

//   let text = (
//     <div className="text">
//       <div>
//       <h1>{weather.header}</h1>
    
//       </div>
//       <ul>
//         <li>Temperature: {weather.temperature} °C </li>
//         <li>Description: {weather.description}</li>
//         <li>Humidity: {weather.humidity} %</li>
//         <li>Wind: {weather.wind} m/s</li>
//       </ul>
//       <div className="link">
//       <a href="https://github.com/NChornenka/weather-react">opensource code</a> by Natalia Ch
//       </div>
//     </div>
//   );

// if(weather.ready){
// return (
//   <div>
//       <form className="d-flex" role="search" onSubmit={handleSubmit} >
//       <input
//         className="form-control me-2"
//         type="text"
//         placeholder="City"
//         aria-label="Search"
//         onChange={updateCity}
        
//       />
//       <input className="btn btn-outline-success" type="submit"
//         Search
//       />
//     </form> 
//     <Weather data={weather} />
//     </div>
// )
//       }
//       else {
//         // searchCity();
//         return "Loading..."
//       }
//     }

