import React from 'react';
import {Link} from 'react-router-dom';
import './tree.css';
import TreeNode from '../../components/TreeNode';
import treeData from '../../Datas/datasTree.json';

const Tree = () => {
    const renderedNodes = new Set();  // Pour éviter les boucles infinies //

    const renderTree = (id, x, y) => {
        const person = treeData.individuals.find(individual => individual.id === id);

        if (!person || renderedNodes.has(id)) return null;

        renderedNodes.add(id);

        const nodeStyle = {
            top: `${y}px`,
            left: `${x}px`,
        };

        const spacingX = 280;
        const spacingY = 150;

        console.log('Rendering connectors at:', { top: y, left: x });

        return (
        <Link to={`/fiche/${person.id}`} key={id} style={{ position: 'relative' }}>
            <TreeNode
            name={`${person.first_name} ${person.last_name}`}
            birth={person.birth_date}
            death={person.death_date}
            profession={person.profession}
            style={nodeStyle}
            />
            
            {/* Render Parents */}
            {person.parents && person.parents.map((parentId, index) => (
                <React.Fragment key={parentId}>
                    <div
                    className="connector connector-horizontal"
                    style={{ top: `${y - spacingY / 2}px`, left: `${x + (index - person.parents.length / 2) * spacingX}px`, width: `${spacingX}px` }}
                    />
                    <div
                    className="connector connector-vertical"
                    style={{ top: `${y - spacingY}px`, left: `${x + (index - person.parents.length / 2) * spacingX}px`, height: `${spacingY / 2}px` }}
                    />
                    {renderTree(parentId, x + (index - person.parents.length / 2) * spacingX, y - spacingY)}
                </React.Fragment>
            ))}

            {/* Render Children */}
            {person.children && person.children.map((childId, index) => (
                <React.Fragment key={childId}>
                    <div
                    className="connector connector-horizontal"
                    style={{ top: `${y + spacingY / 2}px`, left: `${x + (index - person.children.length / 2) * spacingX}px`, width: `${spacingX}px` }}
                    />
                    <div
                    className="connector connector-vertical"
                    style={{ top: `${y + spacingY / 2}px`, left: `${x + (index - person.children.length / 2) * spacingX}px`, height: `${spacingY / 2}px` }}
                    />
                    {renderTree(childId, x + (index - person.children.length / 2) * spacingX, y + spacingY)}
                </React.Fragment>
            ))}
        </Link>
        );
    };

    return (
        <div id="family-tree" style={{ position: 'relative', height: '100vh', width: '100%' }}>
        {renderTree(0, 180, 300)} {/* La personne principale de l'arbre */}
        </div>
    );
};

export default Tree;


