import React from 'react';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { Spaces } from '../shared/DesignTokens';
import { useHeroes } from '../hooks/useHeroes';

const HeroesGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;

export function Search() {
  const [search, setSearch] = React.useState({
    value: 'captain',
    doSearch: false,
  });
const {heroes, searchHero,isLoadingHeroes} = useHeroes(search.value);

  // 2. Busca acionada pelo botão
  React.useEffect(() => {
    if (search.doSearch) {
      searchHero()
        .then((response) => {
          console.log('Resposta da API:', response.data); // Log para ver o que a API respondeu
          setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
        })
        .catch((err) => {
          console.log('Erro na requisição:', err);
          setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
        });
    }
  }, [search.doSearch]);

  function handleUpdateSearchValue({ target: { value } }) {
    setSearch((prevValue) => ({ ...prevValue, value }));
  }

  function handleSearch() {
    setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
  }

  // Verifica se a API respondeu com 'success' e se tem a lista 'results'
  const isSuccess = heroes?.response === 'success';
  const heroList = isSuccess ? heroes.results : [];

  return (
    <>
      <Flex
        width={['100%', '600px']}
        mx={[Spaces.NONE, 'auto']}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
      >
        <Box flexGrow="1">
          <SearchField
            placeholder="Digite um nome de herói ou heroína"
            value={search.value}
            onChange={handleUpdateSearchValue}
          />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button onClick={handleSearch}>Buscar</Button>
        </Box>
      </Flex>

      <HeroesGrid
        px={[Spaces.ONE, Spaces.TWO]}
        pb={[Spaces.ONE, Spaces.TWO]}
      >
        {isLoadingHeroes ? (
          <div>Carregando heróis...</div>
        ) : isSuccess && heroList.length > 0 ? (
          heroList.map((hero) => (
            <HeroCard
              key={hero.id}
              id={hero.id}
              secretIdentity={hero.biography['full-name']}
              name={hero.name}
              picture={hero.image.url}
              universe={hero.biography.publisher}
            />
          ))
        ) : (
          <div>
            {heroes?.error ? `Erro da API: ${heroes.error}` : 'Nenhum herói encontrado.'}
          </div>
        )}
      </HeroesGrid>
    </>
  );
}