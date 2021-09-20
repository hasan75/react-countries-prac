import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flag, capital, region, population} = props.country
    return (
        <div className="country">
            <h2>Name: {name}</h2>
            <h4>Capital:{capital}</h4>
            <h4>Population: {population}</h4>
            <h5>Region: {region}</h5>
            <img src={flag} alt="country_pic" />
        </div>
    );
};

export default Country;