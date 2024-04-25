import { useId } from 'react';
import './index.css';

export default function ToggleEditField({
  fieldName,
  value,
  onChange,
  inputType = 'text',
  required = false,
  edit = true,
}) {
  const uniqueId = useId();
  let input = null;
  let readOnlyMessage = '';

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
        <input
          type={inputType}
          className="toggle-edit-field-input"
          id={uniqueId}
          onChange={onChange}
          value={value}
          required={required}
        ></input>
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
        input
      ) : (
        <span className="toggle-edit-field-readonly">{readOnlyMessage}</span>
      )}
    </div>
  );
}
