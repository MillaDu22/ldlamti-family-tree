import React from 'react';
import Home from "../pages/Home/index";
import Tree from "../pages/Tree/index";
import List from "../pages/List/index";
import Fiche from "../pages/Fiche/index";
import Error from "../pages/Error/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/tree" element={<Tree />} />
                <Route path="/list" element={<List />} />
                <Route path="/fiche/:id" element={<Fiche />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
};

export default Router;