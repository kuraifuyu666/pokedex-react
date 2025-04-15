import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Pokedex.css";  // Assurez-vous d'ajouter des styles pour centrer le contenu

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
        const data = await response.json();
        setPokemons(data);
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div className="pokedex-container">
            <h1>All Pokemon</h1>
            <div >
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default Pokedex;
