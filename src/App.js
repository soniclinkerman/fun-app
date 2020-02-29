import React from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Clock from './Clock';
import Dates from './Dates';
import Quotes from './Quotes';
import Logo from "./Ak Logo.jpeg"
import Music from './Music';
import musicFiles from "./musicfiles.js"
import Test from './Test';
import Updates from './Updates';

function App() {
  // var x = musicFiles.map(function(music) {
  //   var y = Math.floor(Math.random() * music.code)
  //   var z = music.code[y]
    
  //   console.log(music.code)

  //   return (<Music key={music.id} code={music.code}/>)
  // })



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
        <Music />
        <Updates/>
      </div>
    </div>
  );
}

export default App;
