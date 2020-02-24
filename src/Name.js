import React, {Component} from "react"

const greetings = ["Hello", "Howdy", "Greetings" ]
var x = Math.floor(Math.random() * greetings.length)
var y = greetings[x];

function Name(props) {
    return(
        <div>
            <h1> {y} {props.name},</h1>
        </div>
    )
}
export default Name