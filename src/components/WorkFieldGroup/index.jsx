import ToggleEditField from '../ToggleEditField';
import './index.css';

export default function WorkFieldGroup({ values, onChange, edit }) {
  const { company, role, duties, startDate, endDate } = values;
  return (
    <div className="work-info-section input-flex-gap">
      <ToggleEditField
        fieldName="Company"
        value={company}
        onChange={(event) =>
          onChange({
            ...values,
            company: event.target.value,
          })
        }
        edit={edit}
      />
      <ToggleEditField
        fieldName="Role"
        value={role}
        onChange={(event) =>
          onChange({
            ...values,
            role: event.target.value,
          })
        }
        edit={edit}
      />
      <ToggleEditField
        fieldName="Duties"
        value={duties}
        onChange={(event) =>
          onChange({
            ...values,
            duties: event.target.value,
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
