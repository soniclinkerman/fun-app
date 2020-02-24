import React, {Component} from "react";
import Clock from "./Clock"
import "./Quotes.css"
const quotes = [
    "Simply put, what you did got you here, and if you apply the same methods again you will likely get the same result again.",
    "Never be in competion with anyone but your 'yesterday' self."
]

var x = Math.floor(Math.random() * quotes.length)
var y = (quotes[x])


class Quotes extends Component {
    constructor(props){
        super(props);
        this.state= {
            number: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        
        this.setState({number: y})
        
    }
    render(){

        return(
            <div>
              {this.state.number === y ?
               <p><b>Quote of the day:</b> {y}</p> :
               <button onClick={this.handleClick} className="btn quote-btn">Quote of the Day</button> 
              }
        
            </div>
        )
    }
}

export default Quotes