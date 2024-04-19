import WorkFieldGroup from '../WorkFieldGroup';
import './index.css';

export default function ToggleEditWorkInfo({ values, dispatch, edit }) {
  return (
    <div>
      {values.map((value) => (
        <div key={value.id}>
          <WorkFieldGroup
            values={value}
            onChange={(entry) => dispatch({ type: 'changed_work', entry })}
            edit={edit}
          />
          {edit && (
            <button
              className="work-button delete-button"
              onClick={() => dispatch({ type: 'removed_work', entry: value })}
            >
              Delete
            </button>
          )}
        </div>
      ))}
      {!edit && values.length === 0 && (
        <div className="none-message">None!</div>
      )}
      {edit && (
        <button
          className="work-button"
          onClick={() => dispatch({ type: 'added_work' })}
        >
          Add new
        </button>
      )}
    </div>
  );
}
