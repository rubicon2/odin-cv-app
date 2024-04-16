import ToggleEditField from '../ToggleEditField';
import './index.css';

export default function ToggleEditWorkInfo({ entries, onChange, edit }) {
  const localEntries = [...entries];

  function addBlankEntry() {
    localEntries.push({});
    onChange(localEntries);
  }

  return (
    <div>
      {localEntries.map((entry, index) => (
        <div key={index} className="work-info-section input-flex-gap">
          <ToggleEditField
            fieldName={'Company'}
            value={entry.companyName}
            onChange={(event) => {
              entry.companyName = event.target.value;
              onChange(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Position'}
            value={entry.position}
            onChange={(event) => {
              entry.position = event.target.value;
              onChange(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Responsibilities'}
            value={entry.duties}
            onChange={(event) => {
              entry.duties = event.target.value;
              onChange(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Start Date'}
            inputType="date"
            value={entry.startDate}
            onChange={(event) => {
              entry.startDate = event.target.value;
              onChange(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'End Date'}
            inputType="date"
            value={entry.endDate}
            onChange={(event) => {
              entry.endDate = event.target.value;
              onChange(localEntries);
            }}
            edit={edit}
          />
        </div>
      ))}
      <button className="add-work-button" onClick={addBlankEntry}>
        Add new
      </button>
    </div>
  );
}
