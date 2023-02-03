import React from "react";

export default function FormatDate(props){
    let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[props.date.getMonth()];
    let today = props.date.getDate();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }


    return <div>
        <ul>
            <li>
            {day}, {month} {today}
            </li>
            <li>
            {hours}:{minutes}
            </li>
        </ul>
    </div>
}