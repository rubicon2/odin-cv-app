import ToggleEditField from '../ToggleEditField';
import './index.css';

// Fields is an array of objects, containing a field name and field key. It is used to give each field a
// user-friendly name, and so you can select which keys from the values object to show. E.g. you may not
// want to show the id/index of the object to the user, in which case that key can be left out of the fields array.

// onChange returns an object containing the values of all the ToggleEditFields.
export default function ToggleEditFieldGroup({
  fields,
  values,
  onChange,
  edit,
}) {
  return (
    <div className="toggle-edit-field-group input-flex-gap">
      {fields.map((field) => {
        return (
          <ToggleEditField
            key={field.key}
            fieldName={field.name}
            value={values[field.key]}
            onChange={(event) =>
              onChange({
                ...values,
                [field.key]: event.target.value,
              })
            }
            edit={edit}
          />
        );
      })}
    </div>
  );
}
