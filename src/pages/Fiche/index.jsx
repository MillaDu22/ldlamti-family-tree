import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import treeData from '../../Datas/datasTree.json';
import './fiche.css'; 

const Fiche = () => {
    const { id } = useParams(); // Récupérer l'ID depuis l'URL //
    const person = treeData.individuals.find(individual => individual.id === parseInt(id));

    if (!person) {
        return <p>Membre non trouvé</p>;
    }

    return (
        <div className= "container-fiche">
            <div className="member-profile">
                <h1>{`${person.first_name} ${person.last_name}`}</h1>
                <p><strong>Date de naissance:</strong> {person.birth_date}</p>
                <p><strong>Lieu de naissance:</strong> {person.birth_place}</p>
                <p><strong>Date de décès:</strong> {person.death_date}</p>
                <p><strong>Lieu de décès:</strong> {person.death_place}</p>
                <p><strong>Profession:</strong> {person.profession}</p>
                <p><strong>Parents:</strong> {person.parents ? person.parents.join(', ') : 'Aucun'}</p>
                <p><strong>Fratrie:</strong> {person.siblings ? person.siblings.join(', ') : 'Aucun'}</p>
                <p><strong>Union avec:</strong> {person.spouse}</p>
                <p><strong>Enfants:</strong> {person.children ? person.children.join(', ') : 'Aucun'}</p>
                <div className= "container-button">
                    <Link to="/list" className="back-link">Retour à la liste des membres</Link>
                </div>
            </div>
        </div>
    );
};

export default Fiche;
