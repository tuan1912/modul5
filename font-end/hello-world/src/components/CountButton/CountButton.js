import React, { useState } from "react";
import "./CountButton.css"
const CountButton = (props) => {
    
    const [currentCount, setCurrentCount] = useState(0)
    const buttonStyle = {
        color : props.buttonColor,
        background : "red"

    }
    
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }
    return <div>
       <button style = {buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
       <div className="count-display">{currentCount}</div>
        </div>
}
export default CountButton;
