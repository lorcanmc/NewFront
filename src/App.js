import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //   }
    // };
    async function fetchData() {
      const response = fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
      setWeather(response);
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather</h1>
        {weather ? <p>
          {JSON.stringify(weather)}
        </p> : <></>}
        
      </header>
    </div>
  );
}

export default App;
