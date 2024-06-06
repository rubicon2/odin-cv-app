import { useReducer } from 'react';
import { CvAppReducer, initialState } from '../reducers/CvAppReducer';
import {
  InputStateContext,
  InputDispatchContext,
  PreviewSetContext,
} from '../contexts/CvAppContext';

export default function InputDataProvider({ children, setPreviewData }) {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);

  return (
    <InputStateContext.Provider value={state}>
      <InputDispatchContext.Provider value={dispatch}>
        <PreviewSetContext.Provider value={setPreviewData}>
          {children}
        </PreviewSetContext.Provider>
      </InputDispatchContext.Provider>
    </InputStateContext.Provider>
  );
}
