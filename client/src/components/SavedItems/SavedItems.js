import React from "react";

function SavedItems(props) {

    return (
        <div className="SearchContainer">
                <div className="row">
                    <h1>Your Calorie Count for Today:</h1>
                    {props.foods.map((result, i) => (
                        <div className="card" key={i + "-food"}>
                            <div className="row">
                                <div className="col-md-2 center">
                                    {!!result.Photo && <img alt={result.Name} className="img-fluid" src={result.Photo} />}
                                </div>
    
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">{result.Name}</h5>
                                        <p>Brand: {result.Brand}</p>
                                        <p className="card-text">Calories: {result.Calories}</p>
                                    </div>
                                    <button onClick={() => props.action(result)} className="DeleteCalories" >
                                        {props.method} Calories
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}


export default SavedItems;