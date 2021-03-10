import styled from 'styled-components';

const InfoArea = styled.div`
  display: inline-block;
  margin-top: 1.25rem;
  max-height: 28rem;
`;

const Text = styled.p`
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1.5rem;
  display: block;
`;

const Info = (props) => {
  return (
    <InfoArea>
      <Text>
        HT: {props.weight} <abbr title='Decimetres'>dm</abbr>
      </Text>
      <Text>WT: {props.height} lbs</Text>
    </InfoArea>
  );
};

export default Info;
