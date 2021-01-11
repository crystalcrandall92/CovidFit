import React from "react";

const AMR = {
  "Sedantary": 1.2,
  "Active": 1.725
}

const BMR_Container = props => {
  const [state, setState] = React.useState({
    gender: "male",
    weight: 180,
    height: 72,
    age: 25,
    amr: "Sedantary",
    calories: null
  })

  React.useEffect(() => {
    let BMR;
    if (state.gender === "male") {
      BMR = {
        base: 66.47,
        weight: 13.75,
        height: 5.003,
        age: 6.755
      }
    } else {
      BMR = {
        base: 66.47,
        weight: 13.75,
        height: 5.003,
        age: 6.755
      }
    }

    setState(state => ({
      ...state,
      calories: Math.floor(AMR[state.amr] * (BMR.base + (BMR.weight * (state.weight * .45359)) + (BMR.height * (state.height * 2.54)) - (BMR.age * state.age)))
    }))
  }, [state.gender, state.weight, state.height, state.amr])

  return <div style={{width: "70%", margin: "0 auto", backgroundColor: "white" }}>{state.calories}</div>
}

export default BMR_Container