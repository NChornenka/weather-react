import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from"./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";



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
                <WeatherIcon code={props.data.icon} size={56}/>
                <WeatherTemperature temperature={props.data.temperature} unit={props.unit} setUnit={props.setUnit}/>
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