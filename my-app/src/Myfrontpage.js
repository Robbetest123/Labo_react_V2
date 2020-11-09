import React from 'react';
import "./App.css";

function Myfrontpage(props) {
    return(
        <div className="polaroid">
            <div className="container">
                <h1>{props.clubnaam}</h1>
            </div>
            <img src={props.clubimage} onClick={props.selectFunction} ></img>
        </div>
    )
}

export default Myfrontpage;