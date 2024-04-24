import { useId } from 'react';
import './index.css';

export default function ToggleEditField({
  fieldName,
  value,
  onChange,
  inputType = 'text',
  edit = true,
}) {
  const uniqueId = useId();
  return (
    <div className="toggle-edit-field">
      <label className="toggle-edit-field-label" htmlFor={uniqueId}>
        {fieldName}
      </label>
      {edit && (
        <input
          type={inputType}
          className="toggle-edit-field-input"
          id={uniqueId}
          onChange={onChange}
          value={value}
        ></input>
      )}
      {!edit && (
        <span className="toggle-edit-field-readonly">
          {value || 'Not stated'}
        </span>
      )}
    </div>
  );
}
