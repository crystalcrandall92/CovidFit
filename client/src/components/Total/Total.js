import React from "react";

const Total = (props) => {

const total = props.savedFoods.reduce(
    (previousScore, currentValue) => parseInt(previousScore) + parseInt(currentValue.Calories), 0
);

    return (
        <div  style={{width: "70%", margin: "0 auto", backgroundColor: "white" }}>
          <p>Totals Calories Consumed: {total}</p>  
        </div>
        
    )
}

export default Total;