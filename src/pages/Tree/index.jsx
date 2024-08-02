import React from 'react';
import { Link } from 'react-router-dom';
import Alliance from '../../assets/icons/alliance.png';
import Connector from '../../components/Connector/index';
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
        const borderClass = gender === 'male' ? 'border-male' : 'border-female';
        return (
            <Link to={`/fiche/${id}`} className="link">
                <div className={`card-content ${borderClass}`}>
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
            /*const renderGreatGreatGrandParents = () => {
                const paternalGreatGreatGrandfather4 = findIndividualById(29); 
                const paternalGreatGreatGrandmother4 = findIndividualById(28); 
                const maternalGreatGreatGrandfather4 = findIndividualById(27); 
                const maternalGreatGreatGrandmother4 = findIndividualById(26);
                const paternalGreatGreatGrandfather3 = findIndividualById(25); 
                const paternalGreatGreatGrandmother3 = findIndividualById(24); 
                const maternalGreatGreatGrandfather3 = findIndividualById(23); 
                const maternalGreatGreatGrandmother3 = findIndividualById(22);
                const paternalGreatGreatGrandfather2 = findIndividualById(21); 
                const paternalGreatGreatGrandmother2 = findIndividualById(20); 
                const maternalGreatGreatGrandfather2 = findIndividualById(19); 
                const maternalGreatGreatGrandmother2 = findIndividualById(18);
                const paternalGreatGreatGrandfather1 = findIndividualById(17); 
                const paternalGreatGreatGrandmother1 = findIndividualById(16); 
                const maternalGreatGreatGrandfather1 = findIndividualById(15); 
                const maternalGreatGreatGrandmother1 = findIndividualById(14);
    
            return (
                <div className="generation generation4" id="greatGreatGrandParents">
                    <div className="container-pair container-pair13">
                        <div className="pair pair13">
                            {renderIndividualCard(paternalGreatGreatGrandfather4.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(paternalGreatGreatGrandmother4.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair12">
                        <div className="pair pair12">
                            {renderIndividualCard(maternalGreatGreatGrandfather4.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(maternalGreatGreatGrandmother4.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair11">
                        <div className="pair pair11">
                            {renderIndividualCard(paternalGreatGreatGrandfather3.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(paternalGreatGreatGrandmother3.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair10">
                        <div className="pair pair10">
                            {renderIndividualCard(maternalGreatGreatGrandfather3.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(maternalGreatGreatGrandmother3.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair9">
                        <div className="pair pair9">
                            {renderIndividualCard(paternalGreatGreatGrandfather2.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(paternalGreatGreatGrandmother2.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair8">
                        <div className="pair pair8">
                            {renderIndividualCard(maternalGreatGreatGrandfather2.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(maternalGreatGreatGrandmother2.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair7">
                        <div className="pair pair7">
                            {renderIndividualCard(paternalGreatGreatGrandfather1.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(paternalGreatGreatGrandmother1.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                    <div className="container-pair container-pair6">
                        <div className="pair pair6">
                            {renderIndividualCard(maternalGreatGreatGrandfather1.id, 'male')}
                            <img className="alliance" src={Alliance} alt="alliances"/>
                            {renderIndividualCard(maternalGreatGreatGrandmother1.id, 'female')}
                        </div>
                        <Connector />
                    </div>
                </div>
            );
        };*/

    // Rendering great-grandparents //
    const renderGreatGrandParents = () => {
        const paternalGreatGrandfather1 = findIndividualById(12); 
        const paternalGreatGrandmother1 = findIndividualById(13); 
        const maternalGreatGrandfather1 = findIndividualById(8); 
        const maternalGreatGrandmother1 = findIndividualById(9);
        const paternalGreatGrandfather2 = findIndividualById(10); 
        const paternalGreatGrandmother2 = findIndividualById(11); 
        const maternalGreatGrandfather2 = findIndividualById(6); 
        const maternalGreatGrandmother2 = findIndividualById(7);


        return (
            <div className="generation generation3" id="greatGrandParents">
                <div className="container-pair container-pair7">
                    <div className="pair pair5">
                        {renderIndividualCard(paternalGreatGrandfather2.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(paternalGreatGrandmother2.id, 'female')}
                    </div>
                    <Connector />
                    <div className = "long-horizontal2"></div>
                </div>
                <div className="container-pair container-pair6">
                    <div className="pair pair4">
                        {renderIndividualCard(maternalGreatGrandfather2.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(maternalGreatGrandmother2.id, 'female')}
                    </div>
                    <Connector />

                </div>
                <div className="container-pair container-pair5">
                    <div className="pair pair5">
                        {renderIndividualCard(paternalGreatGrandfather1.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(paternalGreatGrandmother1.id, 'female')}
                    </div>
                    <Connector />
                </div>
                <div className="container-pair container-pair4">
                    <div className="pair pair4">
                        {renderIndividualCard(maternalGreatGrandfather1.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(maternalGreatGrandmother1.id, 'female')}
                    </div>
                    <Connector />
                    <span className = "long-horizontal1"></span>
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
            <div className="generation generation2" id="grandParents">
                <div className="container-pair container-pair3">
                    <div className="pair pair3">
                        {renderIndividualCard(paternalGrandfather.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(paternalGrandmother.id, 'female')}
                    </div>
                    <Connector />
                </div>
                <div className="container-pair container-pair2">
                    <div className="pair pair2">
                        {renderIndividualCard(maternalGrandfather.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(maternalGrandmother.id, 'female')}
                    </div>
                    <Connector />
                </div>
            </div>
        );
    };

    // Rendering parents //
    const renderParents = () => {
        const father = findIndividualById(0);
        const mother = findIndividualById(1);

        return (
            <div className="generation generation1" id="parents">
                <div className="container-pair container-pair1">
                    <div className="pair pair1">
                        {renderIndividualCard(father.id, 'male')}
                        <img className="alliance" src={Alliance} alt="alliances"/>
                        {renderIndividualCard(mother.id, 'female')}
                    </div>
                    <Connector />
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
                {/*{renderGreatGreatGrandParents()}*/}
                {renderGreatGrandParents()}
                {renderGrandParents()}
                {renderParents()}
                {renderChildren()}
            </div>
        </div>
    );
};

export default FamilyTree;
