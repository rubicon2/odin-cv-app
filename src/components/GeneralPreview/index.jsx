import { PreviewGetContext } from '../../contexts/CvAppContext';
import { useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  line-height: 1.2;
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.2rem;
`;

const Text = styled.div`
  font-weight: 600;
  color: var(--subtext-color);
  font-style: italic;
`;

export default function GeneralPreview() {
  const { firstName, lastName, email, tel } = useContext(PreviewGetContext);
  return (
    <Container>
      <Heading>{firstName + ' ' + lastName}</Heading>
      <Text>{email}</Text>
      <Text>{tel}</Text>
    </Container>
  );
}
