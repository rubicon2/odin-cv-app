export default function ToggleEditField({fieldName, onChange, value, edit}) {
  return (
    <div className="flex">
      <label htmlFor={fieldName}>{fieldName}</label>
      {edit && 
        <input id={fieldName} onChange={onChange} value={value}></input>
      }
      {!edit &&
        <span>{value}</span>
      }
    </div>
  )
}