import CollapsibleContainer from './components/CollapsibleContainer';
import ToggleEditField from './components/ToggleEditField';
import ToggleEditFieldGroup from './components/ToggleEditFieldGroup';
import DynamicContainer from './components/DynamicContainer';
import EditSaveButton from './components/EditSaveButton';

import { CvAppReducer, initialState } from './reducers/CvAppReducer';
import { useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);
  return (
    <>
      <h1>CV App</h1>
      <div className="app-container">
        <div className="app-container-col">
          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>General</h2>}
          >
            <ToggleEditField
              fieldName="First Name"
              onChange={(event) =>
                dispatch({
                  type: 'changed_first_name',
                  firstName: event.target.value,
                })
              }
              value={state.firstName}
              edit={state.editGeneral}
            />

            <ToggleEditField
              fieldName="Surname"
              onChange={(event) =>
                dispatch({
                  type: 'changed_last_name',
                  lastName: event.target.value,
                })
              }
              value={state.lastName}
              edit={state.editGeneral}
            />

            <EditSaveButton
              onClick={() =>
                state.editGeneral
                  ? dispatch({ type: 'locked_general' })
                  : dispatch({ type: 'unlocked_general' })
              }
              submitted={!state.editGeneral}
            />
          </CollapsibleContainer>

          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>Education</h2>}
          >
            <DynamicContainer
              values={state.education}
              component={ToggleEditFieldGroup}
              componentValueName="values"
              componentProps={{
                fields: [
                  { name: 'Institution', key: 'place' },
                  { name: 'Qualitification(s)', key: 'subject' },
                  { name: 'Start date', key: 'startDate' },
                  { name: 'End date', key: 'endDate' },
                ],
                onChange: (entry) =>
                  dispatch({ type: 'changed_education', entry }),
                edit: state.editEducation,
              }}
              onAdd={() => dispatch({ type: 'added_education' })}
              onDelete={(entry) =>
                dispatch({ type: 'removed_education', entry })
              }
              edit={state.editEducation}
            />

            <EditSaveButton
              onClick={() =>
                state.editEducation
                  ? dispatch({ type: 'locked_education' })
                  : dispatch({ type: 'unlocked_education' })
              }
              submitted={!state.editEducation}
            />
          </CollapsibleContainer>

          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>Work Experience</h2>}
          >
            <DynamicContainer
              values={state.work}
              component={ToggleEditFieldGroup}
              componentValueName="values"
              componentProps={{
                fields: [
                  { name: 'Company', key: 'company' },
                  { name: 'Role', key: 'role' },
                  { name: 'Duties', key: 'duties' },
                  { name: 'Start date', key: 'startDate' },
                  { name: 'End date', key: 'endDate' },
                ],
                onChange: (entry) => dispatch({ type: 'changed_work', entry }),
                edit: state.editWork,
              }}
              onAdd={() => dispatch({ type: 'added_work' })}
              onDelete={(entry) => dispatch({ type: 'removed_work', entry })}
              edit={state.editWork}
            />

            <EditSaveButton
              onClick={() =>
                state.editWork
                  ? dispatch({ type: 'locked_work' })
                  : dispatch({ type: 'unlocked_work' })
              }
              submitted={!state.editWork}
            />
          </CollapsibleContainer>
        </div>
        <div>
          <div className="cv-preview-area"></div>
        </div>
      </div>
    </>
  );
}

export default App;
