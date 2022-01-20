import React from 'react';
import '../customButton/button.css';
import {} from 'react-bootstrap';


export default function Button (props){
    return(
        <div>
            <button {...props}>{props.text}</button>
        </div>
    )
}