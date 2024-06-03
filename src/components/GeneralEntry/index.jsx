import CollapsibleContainer from '../CollapsibleContainer';
import ToggleEditField from '../ToggleEditField';
import EditSaveButton from '../EditSaveButton';

import {
  InputStateContext,
  InputDispatchContext,
  PreviewSetContext,
} from '../../contexts/CvAppContext';
import { useContext } from 'react';

export default function GeneralEntry() {
  const state = useContext(InputStateContext);
  const dispatch = useContext(InputDispatchContext);
  const updatePreview = useContext(PreviewSetContext);

  return (
    <CollapsibleContainer className="input-flex-gap" heading={<h2>General</h2>}>
      <form
        className="flex flex-col input-flex-gap"
        onSubmit={(event) => {
          event.preventDefault();
          state.editGeneral
            ? dispatch({ type: 'locked_general' })
            : dispatch({ type: 'unlocked_general' });
          if (state.editGeneral)
            updatePreview({
              firstName: state.firstName,
              lastName: state.lastName,
              email: state.email,
              tel: state.tel,
            });
        }}
      >
        <div className="data-fields-grid input-flex-gap">
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
        </div>

        <EditSaveButton submitted={!state.editGeneral} />
      </form>
    </CollapsibleContainer>
  );
}
