import React from "react";

const Total = (props) => {
    const string = JSON.stringify(props.savedFoods)
    const total = string.reduce(
    (previousScore, currentValue) => previousScore + currentValue.Calories, 0
);

console.log(string)

    return (
        <p>Totals Calories: {total}</p>
    )
}

export default Total;