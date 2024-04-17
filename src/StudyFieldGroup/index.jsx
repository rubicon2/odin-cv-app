import ToggleEditField from '../ToggleEditField';
import { useState } from 'react';
import './index.css';

export default function StudyFieldGroup({ placeOfStudy, onChange, edit }) {
  const [place, setPlace] = useState('');
  const [subject, setSubject] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function update(setField, event) {
    setField(event.target.value);
    onChange({ place, subject, startDate, endDate });
  }

  return (
    <div className="study-info-section input-flex-gap">
      <ToggleEditField
        fieldName={placeOfStudy}
        value={place}
        onChange={(event) => update(setPlace, event)}
        edit={edit}
      />
      <ToggleEditField
        fieldName={'Qualification(s)'}
        value={subject}
        onChange={(event) => update(setSubject, event)}
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
