import ToggleEditField from '../ToggleEditField';
import { useState } from 'react';
import './index.css';

export default function WorkFieldGroup({ onChange, edit }) {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [duties, setDuties] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function update(setField, event) {
    setField(event.target.value);
    onChange({ companyName, jobTitle, duties, startDate, endDate });
  }

  return (
    <div className="work-info-section input-flex-gap">
      <ToggleEditField
        fieldName="Company"
        value={companyName}
        onChange={(event) => update(setCompanyName, event)}
        edit={edit}
      />
      <ToggleEditField
        fieldName="Role"
        value={jobTitle}
        onChange={(event) => update(setJobTitle, event)}
        edit={edit}
      />
      <ToggleEditField
        fieldName="Duties"
        value={duties}
        onChange={(event) => update(setDuties, event)}
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName={'Start date'}
        value={startDate}
        onChange={(event) => update(setStartDate, event)}
        edit={edit}
      />
      <ToggleEditField
        inputType="date"
        fieldName={'End date'}
        value={endDate}
        onChange={(event) => update(setEndDate, event)}
        edit={edit}
      />
    </div>
  );
}
