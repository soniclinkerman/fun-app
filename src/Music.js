import React, { Component } from "react"

const musicCodes = ["0t9JpOJGwlY", "TsTtqGAxvWk"]

var x = Math.floor(Math.random() * musicCodes.length)
var y = musicCodes[x]

function Music() {
  
    return(
        <div>
            <h5>Music of the day ^-^</h5>

            {/* <p>{props.song}</p> */}
             <iframe width="350" height="250" src={`https://www.youtube.com/embed/${y}`} allowfullscreen frameborder="0" ></iframe>
        </div>
    )
}


export default Music