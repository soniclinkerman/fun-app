
import React, {Component} from "react"
function Music(props) {
    return(
        <div>
            <h5>Music of the day ^-^</h5>
            <p>{props.song}</p>
             <iframe width="250" height="250" src="https://www.youtube.com/embed/snphzO9UFJM" frameborder="0" allowfullscreen></iframe>
        </div>
    )
}

export default Music