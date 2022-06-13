const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  const { results } = await fetch(BASE_URL).then((response) => response.json());

  return results;
};

const getPokemonsDetail = (pokemonsShorList) => {
  const pokemonDetailRequests = pokemonsShorList.map(({ url }) =>
    fetch(url).then((response) => response.json())
  );

  return Promise.all(pokemonDetailRequests);
};

const statsConverter = (statsList) => {
  return statsList.reduce((statMap, { stat, base_stat }) => {
    statMap[stat.name] = base_stat;

    return statMap;
  }, {});
};

const getAndAggregatePokemons = async () => {
  try {
    const pokemons = await getPokemons();

    const pokemonDetailsList = await getPokemonsDetail(pokemons);

    return pokemonDetailsList.map(({ stats, ...otherFields }) => {
      return {
        ...otherFields,
        stats: statsConverter(stats),
      };
    });
  } catch (error) {}
};
