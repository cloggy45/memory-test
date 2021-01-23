import React, {useState, useEffect} from 'react'
import './style.scss'


export default function Card (props){
    return(
        <div className="Card">
            <img src={props.image} alt={props.alt}/>
            <p>{props.name}</p>
        </div>
    )
}