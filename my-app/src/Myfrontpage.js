import React from 'react';
import "./App.css";

function Myfrontpage(props) {
    return(
        <div className="polaroid">
            <div className="container">
                <h1>{props.clubnaam}</h1>
            </div>
            <img src={props.clubimage}></img>
        </div>
    )
}

export default Myfrontpage;