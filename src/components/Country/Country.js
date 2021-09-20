import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country">
            <h2>Name: </h2>
            <h4>Capital:</h4>
            <h4>Population: </h4>
            <h5>Region: </h5>
            <img src="" alt="country_pic" />
        </div>
    );
};

export default Country;