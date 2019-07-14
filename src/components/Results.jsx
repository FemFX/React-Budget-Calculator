import React from 'react';
import '../App.css'

export default class Results extends React.Component {
    render(){
    return (
        <div className="mt-5 container results">
            <div className="alert alert-success">
                +{this.props.totalP}
            </div>
            <div className="alert alert-danger">
                -{this.props.totalM}
            </div>
        </div>
    )
}
}
