import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
    return (
        <div>
            <h1>Countries Shown: {countries.length}</h1>
            <div className="countries">
            {
                countries.map(country => <Country 
                    key={country.numericCode}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;