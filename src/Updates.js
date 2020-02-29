import React, {Component} from "react";
import "./Quotes.css"
class Updates extends Component{
    
    NewUpdates(){

        let updates = [
            {
                date: "2/27/20",
                description: "Added update machine"
            },

            {
                date: "2/28/20",
                description: "Added refresh button"
            },
        ]
        
        alert(updates[0].date + ": " + updates[0].description  + "\r\n" +
              updates[1].date + ": " + updates[1].description  + "\r\n")
    }
 
    render(){
        return(
            <div>
                <button onClick
                ={this.NewUpdates} className="btn announcement-btn">Announcements</button>

            </div>
        )
    }
}

export default Updates