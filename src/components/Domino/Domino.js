import React from 'react';
import './Domino.css';

const Domino = props => {
     return (
          <div className='domino' onClick={ () => props.clicked(props.id) }>
               <img
                    alt={ props.name }
                    src={ props.image }
               />
          </div>
     );
}

export default Domino;