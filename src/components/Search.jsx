import styled from 'styled-components';

import { Submit, Random, Next } from './Btn';

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  max-height: 4rem;
  width: 20rem;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  margin-right: 0.5rem;

  font-size: 1rem;
  font-family: 'Press Start 2P';

  @media (max-width: 970px) {
    width: 10rem;
  }
`;

const Search = (props) => {
  return (
    <>
      <Form action='' onSubmit={props.handleSubmit}>
        <Input
          placeholder='Search...'
          type='text'
          onChange={props.handleChange}
        />
        <Submit type='submit' handleSubmit={props.handleSubmit} />
        <Random type='button' getRandom={props.getRandom} />
        <Next type='button' getNext={props.getNext} />
      </Form>
    </>
  );
};

export default Search;
