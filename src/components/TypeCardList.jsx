import styled from 'styled-components';

import TypeCard from './TypeCard';

const List = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TypeCardList = (props) => {
  const typeList = props.types;

  const types = typeList.map((item) => (
    <TypeCard key={typeList.indexOf(item)} type={item.type.name} />
  ));

  return <List>{types}</List>;
};

export default TypeCardList;
