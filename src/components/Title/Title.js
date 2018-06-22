import React from 'react';
import './Title.css';

const Title = props => (
    <div className="header">
        <h1>{ props.children }</h1>
        <h3>{ props.message } </h3>
        <div className="scores">
            Score: { props.score } High Score: { props.topScore }
        </div>
    </div>

);

export default Title;