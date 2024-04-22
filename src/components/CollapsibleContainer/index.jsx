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
  const titleClass = open
    ? 'collapsible-title'
    : 'collapsible-title no-child-margin-padding';

  return (
    <Container className={className}>
      <div className={titleClass} onClick={() => setOpen(!open)}>
        {heading}
      </div>
      {open && children}
    </Container>
  );
}
