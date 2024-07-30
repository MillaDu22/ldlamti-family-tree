import React from 'react';
import { Link } from 'react-router-dom';


function Fiche() {
    return (
        <div className="fiche">
            <Link to="/" className="back-link">← Retour à la page d'accueil</Link>
        </div>
    );
}

export default Fiche;