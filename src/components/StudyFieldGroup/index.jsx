import ToggleEditField from '../ToggleEditField';
import './index.css';

export default function StudyFieldGroup({
  placeOfStudy,
  value,
  onChange,
  edit,
}) {
  return (
    <div className="study-info-section input-flex-gap">
      <ToggleEditField
        fieldName={placeOfStudy}
        value={value.place}
        onChange={(event) => onChange({ ...value, place: event.target.value })}
        edit={edit}
      />
      <ToggleEditField
        fieldName={'Qualification(s)'}
        value={value.subject}
        onChange={(event) =>
          onChange({ ...value, subject: event.target.value })
        }
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName={'Start date'}
        value={value.startDate}
        onChange={(event) =>
          onChange({ ...value, startDate: event.target.value })
        }
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName={'End date'}
        value={value.endDate}
        onChange={(event) =>
          onChange({ ...value, endDate: event.target.value })
        }
        edit={edit}
      />
    </div>
  );
}
