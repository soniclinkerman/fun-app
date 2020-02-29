import React, { Component } from "react"
import "./Music.css";
var musicCodes = ["0t9JpOJGwlY", "TsTtqGAxvWk", "eKVGPqm9ZcY"]

var x = Math.floor(Math.random() * musicCodes.length)
var y = musicCodes[x]

class Music extends Component{
    constructor(props){
    super(props);
    this.state={
        song: y
    }
    this.refreshMusic = this.refreshMusic.bind(this)
}

refreshMusic(){
    var a = Math.floor(Math.random() * musicCodes.length)
    var b = musicCodes[a]
    {this.setState({
        song: b
    })}
}

render(){
    return(
        <div>
            <div>
                <h5>Music Player</h5>
              <iframe width="350" height="250" src={`https://www.youtube.com/embed/${this.state.song}`} allowfullscreen frameborder="0" ></iframe>
            </div>
            <div>
            <i class="fas fa-redo refresh-btn" onClick={this.refreshMusic} ></i>
            </div>

        </div>
    )
}

}

export default Music



