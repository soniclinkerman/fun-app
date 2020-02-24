import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Clock from './Clock';
import Dates from './Dates';
import Quotes from './Quotes';
import Logo from "./Ak Logo.jpeg"
import Music from './Music';

function App() {
  return (
    <div className="App">
      <div class="container">

        <div className="sec-1">
          <Name className="name" name={"Zay"}/>
          <img  className="logo" src={Logo}/>
          <Dates/>
          <Clock/>
        </div>

        <Quotes/>
        <Music song={"lo-fi Minecraft"}/>
      </div>
    </div>
  );
}

export default App;
