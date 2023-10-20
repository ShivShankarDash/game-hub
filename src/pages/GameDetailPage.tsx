import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <SimpleGrid columns={2} as="dl">
          <DefinitionItem term="Platforms">
            {game.parent_platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Metascore">
            <CriticScore score={game.metacritic} />
          </DefinitionItem>
          <DefinitionItem term="Genres">
            {game.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term="Publishers">
            {game.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </SimpleGrid>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
