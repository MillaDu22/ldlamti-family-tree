import React from 'react';
import France from '../../assets/icons/france.png';
import Allemagne from '../../assets/icons/allemagne.png';
import Espagne from '../../assets/icons/allemagne.png';
import './flagslider.css'; 

const FlagSlider = () => {
    const flags = [
        { name: 'France', imageUrl: France},
        { name: 'Spain', imageUrl: Espagne },
        { name: 'Germany', imageUrl: Allemagne },
        { name: 'Italy', imageUrl: France }
    ];


    return (
        <div className="flag-display">
            {flags.map((flag, index) => (
                <div key={index} className="flag-item">
                    <img src={flag.imageUrl} alt={flag.name} className="flag-image" />
                    <p>{flag.name}</p>
                </div>
            ))}
        </div>
    );
};

export default FlagSlider;
