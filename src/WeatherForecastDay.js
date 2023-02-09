import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    let maxtemp = Math.round(props.day.temp.max);
    let mintemp = Math.round(props.day.temp.min);

    function day(){
        let date = new Date(props.day.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                

        return days[day];
    }

    return(
        <div>
            <div className="day">{day()}</div>
                <WeatherIcon code={props.day.weather[0].icon} size={36}/>
            <div><span className="max-temperature">{maxtemp}°</span>
            <span className="min-temperature">{mintemp}°</span>
            </div>
        </div>
    )
}