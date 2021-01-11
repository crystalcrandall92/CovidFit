import React from "react";
import BMRchart from "../css/BMRtable.jpg";

const Total = (props) => {
const total = props.savedFoods.reduce(
    (previousScore, currentValue) => parseInt(previousScore) + parseInt(currentValue.Calories), 0
);

    return (
        <div  style={{width: "70%", margin: "0 auto", backgroundColor: "white" }}>
          <p>Totals Calories Consumed: {total}</p>  
          <div style={{ backgroundColor: "white", width: "70%", margin: "0 auto"}}><img src={BMRchart} alt="bmr-chart"/></div>
        </div>
        
    )
}

export default Total;