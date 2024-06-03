import CollapsibleContainer from '../CollapsibleContainer';
import DynamicContainer from '../DynamicContainer';
import ToggleEditFieldGroup from '../ToggleEditFieldGroup';
import EditSaveButton from '../EditSaveButton';

import {
  InputStateContext,
  InputDispatchContext,
  PreviewGetContext,
  PreviewSetContext,
} from '../../contexts/CvAppContext';
import { useContext } from 'react';

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

export default function EducationEntry() {
  const state = useContext(InputStateContext);
  const dispatch = useContext(InputDispatchContext);
  const previewData = useContext(PreviewGetContext);
  const setPreviewData = useContext(PreviewSetContext);

  return (
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
            setPreviewData({
              ...previewData,
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
            onChange: (entry) => dispatch({ type: 'changed_education', entry }),
            edit: state.editEducation,
          }}
          onAdd={() => dispatch({ type: 'added_education' })}
          onDelete={(entry) => dispatch({ type: 'removed_education', entry })}
          edit={state.editEducation}
        />
        <EditSaveButton submitted={!state.editEducation} />
      </form>
    </CollapsibleContainer>
  );
}
