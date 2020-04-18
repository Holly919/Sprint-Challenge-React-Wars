import React, { useState, useEffect } from 'react';
import axios from "axios";
import Character from "./components/Character";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => {
      setData(response.data.results)
    })
    .catch(error => {
      console.log("Data not returned", error);

    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="CardClass">
        {data.length ? data.map(item => {
          return <Character name ={item.name}
          birthDate={item.birth_year}
          gender={item.gender}
          height={item.height}
          eyes={item.eye_color} />
        }) : null }
      </div>
    </div>
  );
}

export default App;
