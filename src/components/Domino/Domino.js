import React from 'react';
import './Domino.css';

const Domino = props => (
    <div className="card">
        <div className="img-container">
            <img
                alt={ props.name }
                src={ props.image } />
        </div>
    </div>
);

export default Domino;