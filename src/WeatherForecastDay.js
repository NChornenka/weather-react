import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    
   function day(){
        let date = new Date(props.day.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                

        return days[day];
    }

    function maxTemp() {
        let maxTemp = Math.round(props.day.temp.max);
        if (props.unit !== "celcius") {
            maxTemp = Math.round((maxTemp * 9) / 5 +32)
        }
        return `${maxTemp}`;
    }

    function minTemp() {
        let minTemp = Math.round(props.day.temp.min);
        if (props.unit !== "celcius") {
            minTemp = Math.round((minTemp * 9) / 5 +32)
        }
        return `${minTemp}`;
    }

    return(
        <div>
            <div className="day">{day()}</div>
                <WeatherIcon code={props.day.weather[0].icon} size={36}/>
            <div><span className="max-temperature">{maxTemp()}°</span>
            <span className="min-temperature">{minTemp()}°</span>
            </div>
        </div>
    )
}