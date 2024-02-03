// Import Something from 'somewhere'
import React from "react";
import './Tophead.css';

// function Defination Area
function Tophead(){
    return(
        <>
            <div className="tophead">
                <div className="left">
                    <p>Welcome , Guest <span><a href="javascipt:void()">Login</a></span>
                                    <span><a href="javascipt:void()">Sign Up</a> </span> 
                    </p>
                </div>
                <div className="right">
                    <p> Stay Updated <span><a href="javascipt:void()"> Subscribe Via RSS </a></span>
                                     <span><a href="javascipt:void()"> Email Update </a> </span> 
                    </p>
                </div>
            </div>
        </>
    )
}

// Exporting Area
export default Tophead;