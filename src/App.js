import './App.css';
import Countries from './components/Countries/Countries';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

export default App;
