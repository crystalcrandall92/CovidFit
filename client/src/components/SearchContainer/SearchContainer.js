import React from "react";

function SearchContainer(props) {
    console.log(JSON.stringify(props) + "this is props")
    return (
         <div className="SearchContainer">
            <div className="row">
                <h1>Results:</h1>
                {props.foods.map((result, i) => (
                    <div className="card" key={i + "-search"}>
                        <div className="row">
                            <div className="col-md-2 center">
                                {!!result.Photo && <img alt={result.Name} className="img-fluid" src={result.Photo} />}
                            </div>

                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">{result.Name}</h5>
                                    <p className="card-text">Calories: {result.Calories}</p>
                                </div>
                            </div>
                        </div>
                    </div>    

                ))}
                </div>
        </div>
    )
}

export default SearchContainer;