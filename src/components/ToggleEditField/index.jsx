import { useId, useState } from 'react';
import './index.css';

import cross from '../../assets/cross.svg';
import tick from '../../assets/tick.svg';

export default function ToggleEditField({
  fieldName,
  value,
  onChange,
  inputType = 'text',
  required = false,
  edit = true,
}) {
  const [statusIcon, setStatusIcon] = useState(tick);
  const uniqueId = useId();

  let input = null;
  let readOnlyMessage = '';

  function setIconOnStart(node) {
    if (node) node.checkValidity() ? setStatusIcon(tick) : setStatusIcon(cross);
  }

  function setIconOnChange(event) {
    event.target.checkValidity() ? setStatusIcon(tick) : setStatusIcon(cross);
  }

  switch (inputType) {
    case 'checkbox':
    case 'radio': {
      input = (
        <input
          type={inputType}
          className="toggle-edit-field-input"
          id={uniqueId}
          onChange={onChange}
          checked={value}
          required={required}
        ></input>
      );
      readOnlyMessage = value ? 'Yes' : 'No';
      break;
    }
    default: {
      input = (
        <>
          <input
            type={inputType}
            className="toggle-edit-field-input"
            id={uniqueId}
            ref={setIconOnStart}
            onChange={(event) => {
              setIconOnChange(event);
              onChange(event);
            }}
            value={value}
            required={required}
          ></input>
          <img
            className="toggle-edit-field-input-status-icon"
            src={statusIcon}
          ></img>
        </>
      );
      readOnlyMessage = value || 'Not stated';
    }
  }

  return (
    <div className="toggle-edit-field">
      <label className="toggle-edit-field-label" htmlFor={uniqueId}>
        {fieldName}
      </label>
      {edit ? (
        { ...input }
      ) : (
        <span className="toggle-edit-field-readonly">{readOnlyMessage}</span>
      )}
    </div>
  );
}
