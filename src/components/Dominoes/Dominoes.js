import React from 'react';

export const Dominoes = props => {
    <div className="card">
        <div className="img-container">
            <img
                onClick={ () => props.shuffleCard(props.id) }
                alt={ props.name } src={ props.image } />
        </div>
    </div>
}