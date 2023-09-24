import { Layout } from "../../components/layouts";
import NoFavorites from "../../components/ui/NoFavorites";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { Grid } from "@nextui-org/react";
import FavoritePokemons from "../../components/layouts/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePoke, setfavoritePoke] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePoke(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      {favoritePoke.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          <FavoritePokemons pokemons={favoritePoke} />
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritesPage;
