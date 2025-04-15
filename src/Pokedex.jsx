import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

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
    <>
        <h1>All Pokemon</h1>
        <ul>
        {pokemons.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
        ))}
        </ul>
    </>
    );
};

export default Pokedex;