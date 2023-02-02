import React from 'react';
import './Weather.css';

export default function Weather(){
    return (
    <div className='Weather'>
        <div className='container-weather'>
            <form className="d-flex" role="search">
        {/* <form className="d-flex" role="search" onSubmit={getCity}> */}
      <input
        className="form-control"
        type="text"
        placeholder="City"
        aria-label="search"
        autoFocus="on"
        // onChange={updateCity}
      />
      <input className="btn btn-outline-success" type="submit"
        Search
      />
    </form>
    <div className='heading mt-2'>
        <h1>New York</h1>
        <ul>
            <li>
                Saturday, Feb 16
            </li>
            <li>10:00</li>
        </ul>
    </div>
    <div className='row'>
        <div className='col-6 d-flex align-items-center'>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="weather icon" 
                />

                    <span className="temp float-left">6</span>
                    <span className="unit">°C</span>


        </div>
        <div className='col-6'>
            <ul>
                <li>Cloudy</li>
                <li> Humidity: 70% </li>
                <li>Wind: 7 m/s</li>
            </ul>
        </div>

    </div>
        </div>

    </div>
    )
}