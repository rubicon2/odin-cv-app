import { useState } from 'react';
import './index.css';

export default function Accordion({ accordionItems }) {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div className="accordion">
      {accordionItems.map((item) => {
        if (item.id !== activeKey) {
          return (
            <div key={item.id} className="accordion-item">
              <button
                className="accordion-button"
                onClick={() => setActiveKey(item.id)}
              >
                {item.label}
              </button>
            </div>
          );
        } else {
          return (
            <div key={item.id} className="accordion-item">
              {item.content}
            </div>
          );
        }
      })}
    </div>
  );
}
