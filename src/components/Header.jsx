import styled from 'styled-components';

import Search from './Search';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem 5rem;
  max-height: 6.5rem;
  background-color: #0060f0;

  @media (max-width: 970px) {
    padding: 1.25rem 6%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #ececec;
`;

const Header = (props) => {
  return (
    <Nav>
      <Title>POKéMON INFO</Title>
      <Search
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        getRandom={props.getRandom}
        getNext={props.getNext}
      />
    </Nav>
  );
};

export default Header;
