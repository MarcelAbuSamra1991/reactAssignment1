import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return(
        <div className="UserOutput">
        <p>{props.userName} {props.style}</p>
        <p>Hope i will be overwritted</p>
        </div>
    )
}






export default UserOutput;