import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from"./WeatherIcon";


export default function WeatherData(props) {
    return (
<div className="WeatherData">
                <div className='heading mt-2'>
        <h1>{props.data.header}</h1>
        <ul>
            <li>
                <FormatDate date={props.data.date}/>
            </li>
        </ul>
    </div>
    <div className='row'>
        <div className='col-6 d-flex align-items-center'>
                <WeatherIcon code={props.data.icon}/>
                {/* <img src={props.data.iconUrl} 
                alt="weather icon"/> */}
                    <span className="temp float-left">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C</span>
        </div>
        <div className='col-6'>
            <ul>
                <li className='text-capitalize'>{props.data.description}</li>
                <li> Humidity: {props.data.humidity}% </li>
                <li>Wind: {props.data.wind}m/s</li>
            </ul>
        </div>
    </div>
</div>
    )
}