import ToggleEditField from '../ToggleEditField';
import { useState } from 'react';
import './index.css';

export default function ToggleEditWorkInfo({ edit }) {
  const [entries, setEntries] = useState([]);
  // Make a local copy to avoid mutating the original entries array.
  // I don't see what the problem is with mutating the array, then spreading the elements out into
  // a new array when calling setEntries(), but apparently this is better.
  // Throughout this component, also avoided mutating state of elements in localEntries array, although in this instance
  // it seemed to make no difference whether the objects within the array were changed directly or replaced with new altered objects.
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
    setEntries(localEntries);
  }

  function deleteEntry(entry) {
    localEntries = localEntries.filter((e) => e != entry);
    setEntries(localEntries);
  }

  return (
    <div>
      {localEntries.map((entry, index) => (
        <div
          key={`${entry.index}`}
          className="work-info-section input-flex-gap"
        >
          <ToggleEditField
            fieldName={'Company'}
            value={entry.companyName}
            onChange={(event) => {
              // entry.companyName = event.target.value seemed to work fine, but for good practices, avoiding mutation of entry
              localEntries[index] = {
                ...entry,
                companyName: event.target.value,
              };
              setEntries(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Position'}
            value={entry.position}
            onChange={(event) => {
              localEntries[index] = {
                ...entry,
                position: event.target.value,
              };
              setEntries(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Responsibilities'}
            value={entry.duties}
            onChange={(event) => {
              localEntries[index] = {
                ...entry,
                duties: event.target.value,
              };
              setEntries(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'Start Date'}
            inputType="date"
            value={entry.startDate}
            onChange={(event) => {
              localEntries[index] = {
                ...entry,
                startDate: event.target.value,
              };
              setEntries(localEntries);
            }}
            edit={edit}
          />
          <ToggleEditField
            fieldName={'End Date'}
            inputType="date"
            value={entry.endDate}
            onChange={(event) => {
              localEntries[index] = {
                ...entry,
                endDate: event.target.value,
              };
              setEntries(localEntries);
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
