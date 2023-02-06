import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState ("celcius");

    function intoFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
        let fahrenheitTemperature = props.temperature
    }

    function intoCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    function calculateFahrenheit(){
        return (props.temperature * 9/5) + 32;

    }

    if(unit === "celcius") {
    return (
        <div className="WeatherTemperature">
        <span className="temp float-left">{Math.round(props.temperature)}</span>
                <span className="unit">°C | <a href="/" onClick={intoFahrenheit}>F</a> </span>
        </div>)}
        else {
            
            return (
                
                <div className="WeatherTemperature">
                <span className="temp float-left">{Math.round(calculateFahrenheit())}</span>
                        <span className="unit"><a href="/" onClick={intoCelcius}>C </a>| °F </span>
                </div>
            )
        }
    }
                


    
