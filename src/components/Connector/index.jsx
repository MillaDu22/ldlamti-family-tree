import React from 'react';
import Bracket from '../../assets/icons/right-curly-brace.svg';
import './connector.css';

function Connector({ style }) {
    return (
        <div className="container-bracket-curly" style={style}>
            <img className="bracket" src={Bracket} alt="bracket" />
        </div>
    );
};

export default Connector;
