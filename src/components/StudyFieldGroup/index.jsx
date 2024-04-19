import ToggleEditField from '../ToggleEditField';
import './index.css';

export default function StudyFieldGroup({ values, onChange, edit }) {
  const { place, subject, startDate, endDate } = values;
  return (
    <div className="study-info-section input-flex-gap">
      <ToggleEditField
        fieldName="Institution"
        value={place}
        onChange={(event) =>
          onChange({
            ...values,
            place: event.target.value,
          })
        }
        edit={edit}
      />
      <ToggleEditField
        fieldName="Qualification(s)"
        value={subject}
        onChange={(event) =>
          onChange({
            ...values,
            subject: event.target.value,
          })
        }
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName="Start date"
        value={startDate}
        onChange={(event) =>
          onChange({
            ...values,
            startDate: event.target.value,
          })
        }
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName="End date"
        value={endDate}
        onChange={(event) =>
          onChange({
            ...values,
            endDate: event.target.value,
          })
        }
        edit={edit}
      />
    </div>
  );
}
