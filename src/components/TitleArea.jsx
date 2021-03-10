import styled from 'styled-components';

const Text = styled.p`
  background-color: #f8f8c0;

  margin: 0 0 0 4rem;
  padding: 3rem;

  max-height: 6rem;
  width: 100%;
  display: inline-block;

  border-radius: 1.5rem;

  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 970px) {
    margin: 0;
    padding 3rem 0;
    text-align: center;
  }
`;

const TitleArea = (props) => {
  return (
    <Text>
      {props.id} {props.name} <br />
    </Text>
  );
};

export default TitleArea;
