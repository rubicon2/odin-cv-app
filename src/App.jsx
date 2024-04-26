import CollapsibleContainer from './components/CollapsibleContainer';
import ToggleEditField from './components/ToggleEditField';
import ToggleEditFieldGroup from './components/ToggleEditFieldGroup';
import DynamicContainer from './components/DynamicContainer';
import EditSaveButton from './components/EditSaveButton';

import { CvAppReducer, initialState } from './reducers/CvAppReducer';
import { useState, useReducer } from 'react';

import './App.css';
import CvPreview from './components/CvPreview';

const educationFormFields = [
  { name: 'Institution', key: 'place', required: true },
  { name: 'Summary', key: 'summary', required: true },
  {
    name: 'Start date',
    key: 'startDate',
    type: 'date',
    required: true,
  },
  {
    name: 'End date',
    key: 'endDate',
    type: 'date',
    required: true,
  },
  {
    name: 'To Present',
    key: 'current',
    type: 'checkbox',
  },
];

const workFormFields = [
  { name: 'Company', key: 'company', required: true },
  { name: 'Role', key: 'role', required: true },
  { name: 'Summary', key: 'summary', required: true },
  {
    name: 'Start date',
    key: 'startDate',
    type: 'date',
    required: true,
  },
  {
    name: 'End date',
    key: 'endDate',
    type: 'date',
    required: true,
  },
  { name: 'To Present', key: 'current', type: 'checkbox' },
];

function App() {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);
  const [cvPreviewData, setCvPreviewData] = useState(state);

  return (
    <>
      <h1 className="app-title">CV App</h1>
      <div className="app-container">
        <div className="app-container-col input-area">
          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>General</h2>}
          >
            <form
              className="flex flex-col input-flex-gap"
              onSubmit={(event) => {
                event.preventDefault();
                state.editGeneral
                  ? dispatch({ type: 'locked_general' })
                  : dispatch({ type: 'unlocked_general' });
                if (state.editGeneral)
                  setCvPreviewData({
                    ...cvPreviewData,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    tel: state.tel,
                  });
              }}
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
                required={true}
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
                required={true}
                edit={state.editGeneral}
              />

              <ToggleEditField
                fieldName="Email"
                inputType="email"
                onChange={(event) =>
                  dispatch({
                    type: 'changed_email',
                    email: event.target.value,
                  })
                }
                value={state.email}
                required={true}
                edit={state.editGeneral}
              />

              <ToggleEditField
                fieldName="Telephone"
                inputType="tel"
                onChange={(event) =>
                  dispatch({
                    type: 'changed_tel',
                    tel: event.target.value,
                  })
                }
                value={state.tel}
                edit={state.editGeneral}
              />

              <EditSaveButton submitted={!state.editGeneral} />
            </form>
          </CollapsibleContainer>

          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>Education</h2>}
            initialOpen={false}
          >
            <form
              className="flex flex-col input-flex-gap"
              onSubmit={(event) => {
                event.preventDefault();
                state.editEducation
                  ? dispatch({ type: 'locked_education' })
                  : dispatch({ type: 'unlocked_education' });
                if (state.editEducation)
                  setCvPreviewData({
                    ...cvPreviewData,
                    education: [...state.education],
                  });
              }}
            >
              <DynamicContainer
                values={state.education}
                component={ToggleEditFieldGroup}
                componentValueName="values"
                componentProps={{
                  fields: educationFormFields,
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
              <EditSaveButton submitted={!state.editEducation} />
            </form>
          </CollapsibleContainer>

          <CollapsibleContainer
            className="input-flex-gap"
            heading={<h2>Work Experience</h2>}
            initialOpen={false}
          >
            <form
              className="flex flex-col input-flex-gap"
              onSubmit={(event) => {
                event.preventDefault();
                state.editWork
                  ? dispatch({ type: 'locked_work' })
                  : dispatch({ type: 'unlocked_work' });
                if (state.editWork)
                  setCvPreviewData({ ...cvPreviewData, work: [...state.work] });
              }}
            >
              <DynamicContainer
                values={state.work}
                component={ToggleEditFieldGroup}
                componentValueName="values"
                componentProps={{
                  fields: workFormFields,
                  onChange: (entry) =>
                    dispatch({ type: 'changed_work', entry }),
                  edit: state.editWork,
                }}
                onAdd={() => dispatch({ type: 'added_work' })}
                onDelete={(entry) => dispatch({ type: 'removed_work', entry })}
                edit={state.editWork}
              />
              <EditSaveButton submitted={!state.editWork} />
            </form>
          </CollapsibleContainer>
        </div>
        <div>
          <h2 className="preview-title">Preview</h2>
          <div className="cv-preview-area">
            <CvPreview state={cvPreviewData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
