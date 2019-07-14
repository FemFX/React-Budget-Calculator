import React from 'react'
import '../App.css'

export default function Value(props) {
    return (
        <div className="budget-app ">
            <div className="budget">{props.budget}</div>
        </div>
    )
}
