import styled from 'styled-components';

const typesDict = {
  normal: '#ADA480',
  fighting: '#C22F26',
  flying: '#B49AF6',
  poison: '#A43FA4',
  ground: '#DEBE63',
  rock: '#B49E38',
  bug: '#A8B531',
  ghost: '#6E5391',
  steel: '#B8B5CF',
  fire: '#F07D33',
  water: '#6D88F8',
  grass: '#81CB5B',
  electric: '#E9D436',
  psychic: '#FF598D',
  ice: '#9AD9DA',
  dragon: '#723EFC',
  dark: '#705749',
  fairy: '#E1A4E1'
};

const Type = styled.div`
  text-align: center;
  text-transform: capitalize;

  margin-right: 1rem;

  border-radius: 1rem;

  display: inline-block;
`;

const getColour = (type) => {
  return typesDict[type];
};

const TypeCard = (props) => {
  return (
    <Type style={{ backgroundColor: getColour(props.type) }}>
      <p
        style={{
          lineHeight: '4rem',
          margin: '0',
          padding: '0rem 1rem'
        }}
      >
        {props.type}
      </p>
    </Type>
  );
};

export default TypeCard;
