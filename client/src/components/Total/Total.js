import React from "react";

const Total = (props) => {
const total = props.savedFoods.reduce(
    (previousScore, currentValue) => parseInt(previousScore) + parseInt(currentValue.Calories), 0
);

    return (
        <p>Totals Calories: {total}</p>
    )
}

export default Total;