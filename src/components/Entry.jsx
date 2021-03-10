import styled from 'styled-components';

import { SpriteArea, SpriteAreaSmall } from './Sprites';
import TitleArea from './TitleArea';
import TypeCardList from './TypeCardList';
import Info from './Info';
import TextScreen from './TextScreen';

const Container = styled.div`
  padding: 5rem 5rem 0 5rem;
  display: flex;

  @media (max-width: 970px) {
    flex-direction: column;
  }
`;

const RowContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Entry = (props) => {
  if (!props.current) {
    return <TextScreen start={false} />;
  } else {
    return (
      <Container>
        <section>
          <SpriteArea image={props.current.sprites.front_default} />
        </section>
        <section style={{ width: '100%' }}>
          <TitleArea
            id={props.current.id}
            name={props.current.name}
            xp={props.current.base_experience}
          />
          <RowContainer>
            <SpriteAreaSmall image={props.current.sprites.front_shiny} />
            <ColumnContainer>
              <TypeCardList types={props.current.types} />
              <Info
                height={props.current.height}
                weight={props.current.weight}
              />
            </ColumnContainer>
          </RowContainer>
        </section>
      </Container>
    );
  }
};

export default Entry;
