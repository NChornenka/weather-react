import React from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {


    function intoFahrenheit(event){
        event.preventDefault();
        props.setUnit("fahrenheit");

    }

    function intoCelcius(event){
        event.preventDefault();
        props.setUnit("celcius");
    }

    function calculateFahrenheit(){
        return (props.temperature * 9/5) + 32;

    }

    if(props.unit === "celcius") {
    return (
        <div className="WeatherTemperature">
        <span className="temp float-left">{Math.round(props.temperature)}</span>
                <span className="unit">°C | <a href="/" onClick={intoFahrenheit}>°F</a> </span>
        </div>)}
        else {
            
            return (
                
                <div className="WeatherTemperature">
                <span className="temp float-left">{Math.round(calculateFahrenheit())}</span>
                        <span className="unit"><a href="/" onClick={intoCelcius}>°C </a>| °F </span>
                </div>
            )
        }
    }
                


    
