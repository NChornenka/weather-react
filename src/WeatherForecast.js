import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"


export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
                <div className="col">
                    <div className="day">Thu</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div><span className="max-temperature">19°</span><span className="min-temperature">9°</span></div>
                </div>
            </div>
        </div>
    )
}