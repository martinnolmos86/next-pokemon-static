import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemonID: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonID }) => {
  const router = useRouter();
  const onFavoriteClicker = () => {
    router.push(`/pokemon/${pokemonID}`);
  };

  return (
    <>
      <Grid xs={6} sm={3} md={2} xl={1} key={pokemonID}>
        <Card
          hoverable
          clickable
          onClick={onFavoriteClicker}
          css={{ padding: 10 }}
        >
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
            width={"100%"}
            height={140}
          />
        </Card>
      </Grid>
    </>
  );
};

export default FavoriteCardPokemon;
