import CollapsibleContainer from '../CollapsibleContainer';
import DynamicContainer from '../DynamicContainer';
import ToggleEditFieldGroup from '../ToggleEditFieldGroup';
import EditSaveButton from '../EditSaveButton';

import { StateContext, DispatchContext } from '../../contexts/CvAppContext';
import { useContext } from 'react';

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

export default function WorkEntry({ cvPreviewData, setCvPreviewData }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return (
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
            onChange: (entry) => dispatch({ type: 'changed_work', entry }),
            edit: state.editWork,
          }}
          onAdd={() => dispatch({ type: 'added_work' })}
          onDelete={(entry) => dispatch({ type: 'removed_work', entry })}
          edit={state.editWork}
        />
        <EditSaveButton submitted={!state.editWork} />
      </form>
    </CollapsibleContainer>
  );
}
