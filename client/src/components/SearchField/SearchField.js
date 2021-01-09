import React from "react";
import "../css/styles.css";

function SearchField(props) {
    return (
        <div className="centerform">
            <form>
                <div className="form-group">
                    <input
                        size="sm"
                        value={props.search || ""}
                        onChange={props.handleInputChange}
                        name="search"
                        type="text"
                        placeholder="Search for nutritional info!"
                        id="search"></input>
                <button onClick={props.handleFormSubmit} className="btn btn-info float">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchField;