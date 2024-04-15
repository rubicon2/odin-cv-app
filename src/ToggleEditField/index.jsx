import './index.css';

export default function ToggleEditField({fieldName, onChange, value, edit}) {
  return (
    <div className='toggle-edit-field'>
      <label className='toggle-edit-field-label' htmlFor={fieldName}>{fieldName}</label>
      {edit && 
        <input className='toggle-edit-field-input' id={fieldName} onChange={onChange} value={value}></input>
      }
      {!edit &&
        <span className='toggle-edit-field-readonly'>{value}</span>
      }
    </div>
  )
}