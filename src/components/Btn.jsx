import styled from 'styled-components';

import dice from '../img/dice-btn.png';
import pokeball from '../img/poke-btn.png';
import next from '../img/next-btn.png';

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  border: 0.25rem solid #206090;

  background-position: center;
  background-repeat: no-repeat;
  background-color: #50c0f8;
  background-size: 2rem;

  margin: 0 0.5rem;
`;

const SubmitBtn = styled(Button)`
  background-image: url(${pokeball});
`;

const RandomBtn = styled(Button)`
  background-image: url(${dice});
`;

const NextBtn = styled(Button)`
  background-image: url(${next});
`;

export const Submit = (props) => {
  return (
    <SubmitBtn type='submit' onClick={props.handleSubmit} title='Submit' />
  );
};

export const Random = (props) => {
  return (
    <RandomBtn type='button' onClick={props.getRandom} title='Random Pokemon' />
  );
};

export const Next = (props) => {
  return <NextBtn type='button' onClick={props.getNext} title='Next Pokemon' />;
};
