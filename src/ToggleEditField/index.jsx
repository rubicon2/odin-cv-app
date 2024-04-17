import './index.css';

export default function ToggleEditField({
  fieldName,
  value,
  onChange,
  inputType = 'text',
  edit = true,
}) {
  return (
    <div className="toggle-edit-field">
      <label className="toggle-edit-field-label" htmlFor={fieldName}>
        {fieldName}
      </label>
      {edit && (
        <input
          type={inputType}
          className="toggle-edit-field-input"
          id={fieldName}
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
