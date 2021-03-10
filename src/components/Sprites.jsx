import styled from 'styled-components';

const Image = styled.img`
  display: inline-block;

  background-image: linear-gradient(
    0deg,
    #f8f8f8 25%,
    #f0f0f8 25%,
    #f0f0f8 50%,
    #f8f8f8 50%,
    #f8f8f8 75%,
    #f0f0f8 75%,
    #f0f0f8 100%
  );
  background-size: 5rem 5rem;
`;

const LargeImage = styled(Image)`
  width: 22.5rem;
  height: 22.5rem;

  border-radius: 1.5rem;
  border: none;
  box-shadow: inset 0 0 0 0.15rem #d0c860, inset 0 0 0 0.5rem #f8f898,
    inset 0 0 0 1rem #88a0d0;

  @media (max-width: 970px) {
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-bottom: 2rem;
  }
`;

const SmallImage = styled(Image)`
  width: 15rem;
  height: 15rem;

  margin: 2rem 4rem;

  border-radius: 7.5rem;
  border: none;
  box-shadow: inset 0 0 0 0.15rem #ef8cce, inset 0 0 0 0.75rem #ffbdde,
    inset 0 0 0 1rem #ef8cce;
`;

export const SpriteArea = (props) => {
  return <LargeImage src={props.image} alt='Pokemon default sprite' />;
};

export const SpriteAreaSmall = (props) => {
  return <SmallImage src={props.image} alt='Pokemon default sprite' />;
};
