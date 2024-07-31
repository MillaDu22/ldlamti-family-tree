import React from 'react';
import { Link } from 'react-router-dom';
import './tree.css';
import treeData from '../../Datas/datasTree.json';


const FamilyTree = () => {

    // Function to find an individual by ID //
    const findIndividualById = (id) => {
        return treeData.individuals.find(individual => individual.id === id);
    };

    // Function to render a card for an individual //
    const renderIndividualCard = (id, gender) => {
        const individual = findIndividualById(id);
        if (!individual) return null;

        const { first_name, last_name, birth_date, birth_place, death_date, death_place, profession } = individual;
        const cardClass = gender === 'male' ? 'card-m' : 'card-f';

        return (
            <Link to={`/fiche/${id}`} className={cardClass}>
                <div className="card-content">
                    <div className="card-item">
                        <strong>Prénom:</strong> {first_name}
                    </div>
                    <div className="card-item">
                        <strong>Nom:</strong> {last_name}
                    </div>
                    <div className="card-item">
                        <strong>Date de naissance:</strong> {birth_date}
                    </div>
                    <div className="card-item">
                        <strong>à:</strong> {birth_place}
                    </div>
                    <div className="card-item">
                        <strong>Date de décès:</strong> {death_date}
                    </div>
                    <div className="card-item">
                        <strong>à:</strong> {death_place}
                    </div>
                    <div className="card-item">
                        <strong>Profession:</strong> {profession}
                    </div>
                </div>
            </Link>
        );
    };

        // Rendering great great-grandparents //
        const renderGreatGreatGrandParents = () => {
            const paternalGreatGreatGrandfather = findIndividualById(10); 
            const paternalGreatGreatGrandmother = findIndividualById(11); 
            const maternalGreatGreatGrandfather = findIndividualById(12); 
            const maternalGreatGreatGrandmother = findIndividualById(13);
    
            return (
                <div className="generation" id="greatGreatGrandParents">
                    <div className="pair">
                        {renderIndividualCard(paternalGreatGreatGrandfather.id, 'male')}
                        {renderIndividualCard(paternalGreatGreatGrandmother.id, 'female')}
                    </div>
                    <div className="pair">
                        {renderIndividualCard(maternalGreatGreatGrandfather.id, 'male')}
                        {renderIndividualCard(maternalGreatGreatGrandmother.id, 'female')}
                    </div>
                </div>
            );
        };

    // Rendering great-grandparents //
    const renderGreatGrandParents = () => {
        const paternalGreatGrandfather = findIndividualById(6); 
        const paternalGreatGrandmother = findIndividualById(7); 
        const maternalGreatGrandfather = findIndividualById(8); 
        const maternalGreatGrandmother = findIndividualById(9);

        return (
            <div className="generation" id="greatGrandParents">
                <div className="pair">
                    {renderIndividualCard(paternalGreatGrandfather.id, 'male')}
                    {renderIndividualCard(paternalGreatGrandmother.id, 'female')}
                </div>
                <div className="pair">
                    {renderIndividualCard(maternalGreatGrandfather.id, 'male')}
                    {renderIndividualCard(maternalGreatGrandmother.id, 'female')}
                </div>
            </div>
        );
    };

    // Rendering grandparents //
    const renderGrandParents = () => {
        const paternalGrandfather = findIndividualById(2);
        const paternalGrandmother = findIndividualById(3);
        const maternalGrandfather = findIndividualById(4);
        const maternalGrandmother = findIndividualById(5);

        return (
            <div className="generation" id="grandParents">
                <div className="pair">
                    {renderIndividualCard(paternalGrandfather.id, 'male')}
                    {renderIndividualCard(paternalGrandmother.id, 'female')}
                </div>
                <div className="pair">
                    {renderIndividualCard(maternalGrandfather.id, 'male')}
                    {renderIndividualCard(maternalGrandmother.id, 'female')}
                </div>
            </div>
        );
    };

    // Rendering parents //
    const renderParents = () => {
        const father = findIndividualById(0);
        const mother = findIndividualById(1);

        return (
            <div className="generation" id="parents">
                <div className="pair">
                    {renderIndividualCard(father.id, 'male')}
                    {renderIndividualCard(mother.id, 'female')}
                </div>
            </div>
        );
    };

    // Rendering children //
    const renderChildren = () => {
        const child1 = findIndividualById(-1);



        return (
            <div className="generation" id="child">
                {renderIndividualCard(child1.id, 'male')}
            </div>
        );
    };

    return (
        <div className="page-tree">
            <div id="familyTree">
                {renderGreatGreatGrandParents()}
                {renderGreatGrandParents()}
                {renderGrandParents()}
                {renderParents()}
                {renderChildren()}
            </div>
        </div>
    );
};

export default FamilyTree;

