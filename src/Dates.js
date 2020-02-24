import React, {Component} from "react"

const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"]

class Dates extends Component{
    constructor(props){
        super(props);
        this.state={
            day: 0
        }
    }

    render(){
        var day;
        switch(new Date().getDay()) {
            case (0):
                day = days[0];
                break;

            case (1):
                day = days[1];
                break;

            case (2):
                day = days[2];
                break;

            case (3):
                day = days[3];
                break;

            case (4):
                day = days[4];
                break;
            
            case (5):
                day = days[5];
                break;
            
            case (6):
                day = days[6];
                break;

                
        }
        return(
            <div>
                <h2>Today is {day}</h2>
            </div>
        )
    }
}

export default Dates