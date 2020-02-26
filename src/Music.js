import React, { Component } from "react"
const musicCodes = ["0t9JpOJGwlY", "TsTtqGAxvWk"]

var x = Math.floor(Math.random() * musicCodes.length)
var y = musicCodes[x]

// function Music(props) {
  
//     return(
//         <div>
//             <h5>Music of the day ^-^</h5>

//             {/* <p>{props.song}</p> */}
//              <iframe width="350" height="250" src={`https://www.youtube.com/embed/${props.code}`} allowfullscreen frameborder="0" ></iframe>
//         </div>
//     )
// }

class Music extends Component{

    constructor(props){
    super(props);
    this.state={
        song: " "

    }
}

componentDidMount(){
    fetch("M")


    this.timerID = setInterval(
        () => this.newSong(),
        1000
    );
}

newSong(){
    this.setState({
        song: y
    })
}



render(){
    return(
        <div>
        <h5>Music of the day ^-^</h5>
              <iframe width="350" height="250" src={`https://www.youtube.com/embed/${this.state.song}`} allowfullscreen frameborder="0" ></iframe>
        </div>
    )
}

}

export default Music



