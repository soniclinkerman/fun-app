function Music(props) {
  
    return(
        <div>
            <h5>Music of the day ^-^</h5>

            {/* <p>{props.song}</p> */}
             <iframe width="350" height="250" src={`https://www.youtube.com/embed/${props.code}`} allowfullscreen frameborder="0" ></iframe>
        </div>
    )
}

// MUSIC WOULD BE SHOWN IN ONE SECOND
// componentDidMount(){
//     this.timerID = setInterval(
//         () => this.newSong(),
//         1000
//     );
// }


// newSong(){
//     this.setState({
//         song: y
//     })
// }