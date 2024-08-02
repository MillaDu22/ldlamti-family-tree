import React from 'react';
import { Link } from 'react-router-dom';
import treeData from '../../Datas/datasTree.json';
import './list.css'; 

const List = () => {
    // Extraction des individus depuis les données //
    const individuals = treeData.individuals;

    // Fonction pour trier les individus par ordre alphabétique //
    const sortedIndividuals = individuals.sort((a, b) => {
        const nameA = ` ${a.last_name}`.toUpperCase();
        const nameB = ` ${b.last_name}`.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    // Organisation des individus par lettre initiale //
    const groupedIndividuals = sortedIndividuals.reduce((acc, individual) => {
        const initial = individual.last_name.charAt(0).toUpperCase();
        if (!acc[initial]) {
        acc[initial] = [];
        }
        acc[initial].push(individual);
        return acc;
    }, {});

    return (
        <div className="member-list">
        <h1 className = "title-list">Liste des Membres de la Famille</h1>
        {Object.keys(groupedIndividuals).map(letter => (
            <div key={letter} className="letter-group">
            <h2>{letter}</h2>
            <ul>
                {groupedIndividuals[letter].map(individual => (
                <li key={individual.id}>
                    <Link to={`/fiche/${individual.id}`} className="member-link">
                    {`${individual.last_name} ${individual.first_name}`}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    );
};

export default List;
