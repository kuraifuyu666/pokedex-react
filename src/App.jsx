import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";
import Search from "./Search";
import Pokemon from "./Pokemon";
import "./App.css";

const NavigationBar = () => {
return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/pokedex">Pokedex</Link>
        <Link to="/search">Recherche</Link>
    </nav>
    );
};

const App = () => (
<BrowserRouter>
    <NavigationBar />
    <div className="content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pokemon" element={<Pokemon />} /> {/* Add new route */}
    </Routes>
    </div>
</BrowserRouter>
);

export default App;