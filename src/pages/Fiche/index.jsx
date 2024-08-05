import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import treeData from '../../Datas/datasTree.json';
import olivier from '../../assets/icons/olivier.webp';
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
                <h1 className="title-fiche">{`${person.first_name} ${person.last_name}`}</h1>
                <div className ="container-containers-fiche">
                    <div className= "container-person">
                        <p><strong>Naissance:</strong> {person.birth_date}</p>
                        <p><strong>à:</strong> {person.birth_place}</p>
                        <p><strong>Décès:</strong> {person.death_date}</p>
                        <p><strong>à:</strong> {person.death_place}</p>
                        <p><strong>Metier:</strong> {person.profession}</p>
                        <p><strong>Parents:</strong> {person.parents ? person.parents.join(', ') : 'Aucun'}</p>
                        <p><strong>Fratrie:</strong> {person.siblings ? person.siblings.join(', ') : 'Aucun'}</p>
                        <p><strong>Union avec:</strong> {person.spouse}</p>
                        <p><strong>Enfants:</strong> {person.children ? person.children.join(', ') : 'Aucun'}</p>
                    </div>
                    <div className="container-olivier">
                        <img src = {olivier} alt ="branche d'olivier" className="olivier"/>
                    </div>
                </div>
                <div className= "container-button">
                    <Link to="/list" className="back-link">&#8592;  Liste membres</Link>
                    <Link to="/tree" className="back-link">&#8592; Arbre</Link>
                </div>
            </div>
        </div>
    );
};

export default Fiche;
