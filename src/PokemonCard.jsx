import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    const imageUrl = `https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/${pokemon.url.split("/").filter(Boolean).pop()}.png`;

    return (
    <Link to={`/pokemon?name=${pokemon.name}`}>
        <div className="pokemon-card">
        <img src={imageUrl} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        </div>
    </Link>
    );
};

export default PokemonCard;