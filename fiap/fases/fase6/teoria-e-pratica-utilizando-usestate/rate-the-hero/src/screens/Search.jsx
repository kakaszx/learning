import { Flex, Box } from 'reflexbox';
import styled from 'styled-components';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { Spaces } from '../shared/DesignTokens';
import React from 'react';
const HeroesGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`;

const heroesData = [
	{
		id:1,
		secretIdentity:"Terry McGinnis",
		name:"Batman",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
		universe:"DC Comics",
	},
	{
		id:2,
		secretIdentity:"Steve Rogers",
		name:"Captain America",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
		universe:"Marvel",
	},
	{
		id:3,
		secretIdentity:"Peter Parker",
		name:"Spider Man",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/133.jpg",
		universe:"Marvel",
	},
	{
		id:4,
		secretIdentity:"Thanos",
		name:"Thanos",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg",
		universe:"Marvel",
	},
	{
		id:5,
		secretIdentity:"Natasha Romanoff",
		name:"Black Widow",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/248.jpg",
		universe:"Marvel",
	},	
];
 	const newHero = {
		
		id:6,
		secretIdentity:"Carol Denvers",
		name:"Captain Marvel",
		picture:"https://www.superherodb.com/pictures2/portraits/10/100/103.jpg",
		universe:"Marvel",
 	}

export function Search() {
	const [heroes, setHeroes] = React.useState(heroesData)
	return (
		<>
			<Flex
				width={['100%', '600px']}
				mx={[Spaces.None, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
			>
				<Box flexGrow="1">
					<SearchField placeholder="Digite um nome de herói ou heroína" />
				</Box>
				<Box ml={Spaces.TWO}>
					<Button>Buscar</Button>
				</Box>
			</Flex>
			<Button onClick={() => {
				setHeroes(prevValue =>[...prevValue,newHero])
			}}>
				Adicionar novo héroi
			</Button>
			<HeroesGrid>
			  {heroes.map((hero) => (
				<HeroCard
				key={hero.id}
				id={hero.id}
				secretIdentity={hero.secretIdentity}
				name={hero.name}
				picture={hero.picture}
				universe={hero.universe}
				/>
			))}
			</HeroesGrid>
		</>
	);
}