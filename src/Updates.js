import React, {Component} from "react";
import "./Quotes.css"
class Updates extends Component{
    
    NewUpdates(){

        let updates = [
            {
                date: "2/28/20",
                description: "Added update machine"
            },
        ]
        
        alert(updates[0].date + ": " + updates[0].description  + "\r\n")
    }
 
    render(){
        return(
            <div>
                <button onMouseEnter={this.NewUpdates} className="btn announcement-btn">Announcements</button>

            </div>
        )
    }
}

export default Updates