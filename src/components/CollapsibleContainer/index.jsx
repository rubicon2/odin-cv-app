import { useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: transparent;
  }

  * {
    margin: 0;
  }
`;

// Normal container except you can click on the heading to open/close it.
export default function CollapsibleContainer({
  heading,
  children,
  className = '',
  initialOpen = true,
}) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <Container className={className}>
      <Button onClick={() => setOpen(!open)}>{heading}</Button>
      {open && children}
    </Container>
  );
}
