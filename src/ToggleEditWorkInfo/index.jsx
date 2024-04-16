import ToggleEditField from '../ToggleEditField';
import './index.css';

export default function ToggleEditWorkInfo({ entries, onChange, edit }) {
  let localEntries = [...entries];

  function addBlankEntry() {
    const biggestIndex = localEntries.reduce(
      (biggest, current) => (current.index > biggest ? current.index : biggest),
      -1,
    );
    localEntries.push({
      index: biggestIndex + 1,
      companyName: '',
      position: '',
      duties: '',
      startDate: '',
      endDate: '',
    });
    onChange(localEntries);
  }

  function deleteEntry(entry) {
    localEntries = localEntries.filter((e) => e != entry);
    onChange(localEntries);
  }

  return (
    <div>
      {localEntries.map((entry) => (
        <div
          key={`${entry.index}`}
          className="work-info-section input-flex-gap"
        >
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
          {edit && (
            <button
              className="work-button delete-button"
              onClick={() => deleteEntry(entry)}
            >
              Delete
            </button>
          )}
        </div>
      ))}
      {!edit && localEntries.length === 0 && (
        <div className="none-message">None!</div>
      )}
      {edit && (
        <button className="work-button" onClick={addBlankEntry}>
          Add new
        </button>
      )}
    </div>
  );
}
