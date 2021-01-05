import React from "react";

function SearchContainer(props) {

    return (
        <div>
            <div>
                <h1>Results:</h1>
                {props.searchQuery.map((result, i) => (
                    <div className="card" key={i + "-search"}>
                        <div className="row">
                            <div className="col-md-2 center">
                                {!!result.image && <img alt={result.food_name} className="img-fluid" src={result.image} />}
                            </div>

                            <div className="card-body">
                                <div>
                                <h5 className="card-title">{result.food_name}</h5>
                                <p className="card-text">Calories: {result.nf_calories}</p>
                                </div>
                            </div>
                ))}
            </div>
        </div>
    )
}

export default SearchContainer;