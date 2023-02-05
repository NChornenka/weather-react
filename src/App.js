import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from './Weather'


export default function App(){
    return (
        <div className='container'>
            <Weather defaultCity="New York"/>
            <footer>
      <a href="https://github.com/NChornenka/weather-react" target="_blank" rel="noopener noreferrer">opensource code</a> by Natalia Ch
            </footer>

        </div>
    )
}