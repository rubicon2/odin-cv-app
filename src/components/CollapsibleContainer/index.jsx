import Container from '../Container';
import { useState } from 'react';

import './index.css';

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
      <button className="collapsible-button" onClick={() => setOpen(!open)}>
        {heading}
      </button>
      {open && children}
    </Container>
  );
}
