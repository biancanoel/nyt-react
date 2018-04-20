import React from "react";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const ResultsList = (props) => (
    <div className="container">
        <div className="row" >
            <div className='col-12'>
                <ul className="list-group" > {props.children}   </ul>
            </div>
        </div>
    </div>
)

export default ResultsList



