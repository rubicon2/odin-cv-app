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
      <div className="collapsible-title" onClick={() => setOpen(!open)}>
        {heading}
      </div>
      {open && children}
    </Container>
  );
}
