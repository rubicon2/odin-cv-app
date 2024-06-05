import styled from 'styled-components';

export default function Container({ children, className = '' }) {
  const Container = styled.div`
    padding: 2rem;

    background-color: var(--light-color);
    color: var(--dark-color);
    border-radius: 15px;

    display: flex;
    flex-direction: column;

    box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.2);

    &:last-child {
      margin-bottom: 0;
    }
  `;

  return <Container className={className}>{children}</Container>;
}
