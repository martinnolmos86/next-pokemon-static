import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { pokemonApi } from "../api";
import { Grid } from "@nextui-org/react";

import { PokemonListResponse, SmallPokemon } from "../interfaces";
import PokemonCard from "../components/layouts/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemons={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon/?limit=151"
  );
  // Agregar el ID y la URL de la imagen a cada Pokémon
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    id: index + 1, // Sumar 1 al índice para obtener el ID
    name: pokemon.name,
    url: pokemon.url,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`, // Agrega la URL de la imagen aquí
  }));
  return {
    props: { pokemons },
  };
};
export default HomePage;
