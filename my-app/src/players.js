import React from 'react';
import "./App.css";

function Players(props) {
    if(props.page == props.clubnaam)
        {
            return(
                    <div className="polaroid">
                        <div className="container">
                            <h1>{props.spelersnaam}</h1>
                        </div>
                        <img src={props.spelersfoto} ></img>
                    </div>
                    
                )
                
        }
        else{
            return (null)
        }
    
}

export default Players;