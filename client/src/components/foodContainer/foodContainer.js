import React from "react";
import "../css/styles.css";

function FoodContainer(props) {
    console.log(props)
    let classes = "btn mt-3 ml-3 float btn-" + props.color
    return (
        <div>
            <div>
                <h1>Results:</h1>
                {props.foods.map((result, i) => (
                    <div className="card" key={i}>
                        <div className="row">
                            <div className="col-md-2 center">
                                {!!result.image && <img alt={result.name} className="img-fluid" src={result.photo} />}
                            </div>
                            <div className="col-md-10">
                                <div>
                                    <a href={result.link} className="btn btn-info mt-3 float" target="_blank" rel="noopener noreferrer">View</a>
                                    <button onClick={() => props.action(result)} className={classes} >
                                        {props.method}
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{result.name} by {result.brand}</h5>
                                    <p className="card-text">{result.serving}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FoodContainer;