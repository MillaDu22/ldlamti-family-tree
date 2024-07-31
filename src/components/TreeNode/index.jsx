import React from 'react';
import './treenode.css';

const TreeNode = ({ name, birth, death, profession, style }) => {
    return (
        <div className="tree-node" style={style}>
            <h4>{name}</h4>
            <p>{birth} - {death || "Présent"}</p>
            <p>{profession}</p>
        </div>
    );
};

export default TreeNode;
