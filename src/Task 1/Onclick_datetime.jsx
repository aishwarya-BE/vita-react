import { useState } from "react";
export default function Onclick_datetime(){
    const [dateTime,setDateTime] = useState("")
    function showDate(){
        setDateTime(new Date().toLocaleString())
    }

    return(
        <div >
            <h3 className="text-primary">Today's Date and Time</h3>

            <button className="btn btn-primary" 
                onClick={showDate}>
                Show date and Time
            </button>

            <h5 className="text-success">{dateTime}</h5>
        </div>
    )
}