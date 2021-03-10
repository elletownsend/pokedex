import styled from 'styled-components';

const Text = styled.p`
  margin: 0 0 2rem 5rem;
  padding: 3rem;

  width: calc(100vw - 10rem);

  display: inline-block;
  box-sizing: border-box;

  line-height: 1.5rem;

  border-radius: 1.5rem;
  border: 1rem solid #60e030;

  background-color: #fff;
`;

const BottomTxtArea = () => {
  return (
    <Text>
      Hello! Welcome to the Pokédex! Search for your favourite, or use our
      randomiser to get a random Pokémon of our choosing!
    </Text>
  );
};

export default BottomTxtArea;
