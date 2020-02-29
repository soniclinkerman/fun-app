import React, { Component } from "react";
import "./Test.css"

class Test extends Component{
    keyType(event){
        if (event.keyCode === 56){
            alert("Cool")
        } else{
            alert("Boo")
        }
    }

    // dispenseWisdom(){
    //     let message = [
    //         "Simply put, what you did got you here, and if you apply the same methods again you will likely get the same result again.",
    //         "Never be in competion with anyone but your 'yesterday' self.",
    //         "There's a lesson behind every mistake you make. You just need to find it",
    //         "Do the hardest task of your day the moment you wake up. You will feel a sense of accomplishment once you do!"
    //     ]
    //     let rIndex= Math.floor(Math.random() * message.length)
    //     console.log(message[rIndex])
    // }

    render(){
        return(
            <div className="WiseSquare" >
                <form >
                <input type="text" onKeyDown={this.keyType} />

                </form>
                

            </div>
        )
    }
}

export default Test
