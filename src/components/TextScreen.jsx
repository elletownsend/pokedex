import styled from 'styled-components';

const Main = styled.div`
  height: 50vh;
  padding: 0 5rem;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextScreen = (props) => {
  let text = 'Search a Pokemon to Start!';

  return (
    <Main>
      <h1>{text}</h1>
    </Main>
  );
};

export default TextScreen;
