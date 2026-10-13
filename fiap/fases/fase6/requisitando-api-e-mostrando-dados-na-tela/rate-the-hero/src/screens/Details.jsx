import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components';
import { Button } from '../common-components/Button/Button';
import { Spaces } from '../shared/DesignTokens';

// Container centralizado na tela
const PageContainer = styled(Box)`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const SelectRating = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
`;

const Card = styled(Box)`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 12px;
  text-transform: uppercase;
  color: #718096;
  letter-spacing: 0.5px;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #2d3748;
  line-height: 1.5;
`;

const GridInfo = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${Spaces.TWO};
  margin-top: ${Spaces.THREE};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridDetails = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Spaces.TWO};
  margin-top: ${Spaces.TWO};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState('5');
  const [{ data: hero, loading, error }] = useAxios(`/${id}`);

  function handleAssignRating() {
    localStorage.setItem(`@hero-rating-${id}`, rating);
    alert(`Nota ${rating} atribuída com sucesso!`);
  }

  if (loading) {
    return <PageContainer p={Spaces.FOUR}>Carregando detalhes do herói...</PageContainer>;
  }

  if (error || !hero) {
    return <PageContainer p={Spaces.FOUR}>Erro ao carregar os dados do herói.</PageContainer>;
  }

  return (
    <PageContainer p={[Spaces.TWO, Spaces.FOUR]}>
      {/* Seção da Imagem e Controle de Atribuição da Nota */}
      <Flex justifyContent="space-between" alignItems="flex-start" flexWrap="wrap">
        <HeroImage src={hero.image?.url} alt={hero.name} />

        <Flex alignItems="center" mt={[Spaces.TWO, 0]}>
          <SelectRating value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </SelectRating>

          <Box ml={Spaces.TWO}>
            <Button onClick={handleAssignRating}>ATRIBUIR</Button>
          </Box>
        </Flex>
      </Flex>

      {/* Nome do Herói e Nome Real */}
      <Box mt={Spaces.THREE}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#1a202c' }}>{hero.name}</h1>
        <p style={{ margin: '4px 0 0 0', color: '#718096', fontSize: '14px' }}>
          {hero.biography?.['full-name'] || hero.name} - {hero.biography?.publisher}
        </p>
      </Box>

      {/* Cards Superiores: Codinomes, Local de Nascimento, Primeira HQ */}
      <GridInfo>
        <Card>
          <CardTitle>Codinomes</CardTitle>
          <CardText>{hero.biography?.aliases?.join(', ') || 'Nenhum'}</CardText>
        </Card>

        <Card>
          <CardTitle>Local de Nascimento</CardTitle>
          <CardText>
            {hero.biography?.['place-of-birth'] !== '-'
              ? hero.biography?.['place-of-birth']
              : 'Desconhecido'}
          </CardText>
        </Card>

        <Card>
          <CardTitle>Primeira HQ</CardTitle>
          <CardText>
            {hero.biography?.['first-appearance'] !== '-'
              ? hero.biography?.['first-appearance']
              : 'Desconhecida'}
          </CardText>
        </Card>
      </GridInfo>

      {/* Cards Inferiores: Informações Biológicas e Atributos */}
      <GridDetails>
        <Card>
          <CardTitle>Informações Biológicas</CardTitle>
          <CardText><strong>Gênero:</strong> {hero.appearance?.gender || '-'}</CardText>
          <CardText><strong>Raça:</strong> {hero.appearance?.race || '-'}</CardText>
          <CardText><strong>Altura:</strong> {hero.appearance?.height?.[1] || '-'}</CardText>
          <CardText><strong>Peso:</strong> {hero.appearance?.weight?.[1] || '-'}</CardText>
          <CardText><strong>Cor do olho:</strong> {hero.appearance?.['eye-color'] || '-'}</CardText>
          <CardText><strong>Cor do cabelo:</strong> {hero.appearance?.['hair-color'] || '-'}</CardText>
        </Card>

        <Card>
          <CardTitle>Atributos</CardTitle>
          <CardText><strong>Força:</strong> {hero.powerstats?.strength || '-'}</CardText>
          <CardText><strong>Inteligência:</strong> {hero.powerstats?.intelligence || '-'}</CardText>
          <CardText><strong>Velocidade:</strong> {hero.powerstats?.speed || '-'}</CardText>
          <CardText><strong>Resistência:</strong> {hero.powerstats?.durability || '-'}</CardText>
          <CardText><strong>Poder:</strong> {hero.powerstats?.power || '-'}</CardText>
          <CardText><strong>Combate:</strong> {hero.powerstats?.combat || '-'}</CardText>
        </Card>
      </GridDetails>

      {/* Botão de Voltar Centralizado */}
      <Flex justifyContent="center" mt={Spaces.FOUR}>
        <Button onClick={() => navigate(-1)}>VOLTAR</Button>
      </Flex>
    </PageContainer>
  );
}