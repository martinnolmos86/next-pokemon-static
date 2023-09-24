import { FC } from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}

const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonID={id} key={id} />
      ))}
    </>
  );
};

export default FavoritePokemons;
