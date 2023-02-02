import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './App.css';
import SearchForm from './SearchForm';
import Weather from './Weather'


export default function App(){
    return (
        <div className='container'>
            {/* <SearchForm defaultCity="New York"/> */}
            <Weather />
            <footer>
      <a href="https://github.com/NChornenka/weather-react" target="_blank">opensource code</a> by Natalia Ch
            </footer>

        </div>
    )
}