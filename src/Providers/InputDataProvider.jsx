import { useReducer } from 'react';
import { CvAppReducer, initialState } from '../reducers/CvAppReducer';
import {
  InputStateContext,
  InputDispatchContext,
  PreviewGetContext,
  PreviewSetContext,
} from '../contexts/CvAppContext';

export default function InputDataProvider({
  children,
  previewData,
  setPreviewData,
}) {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);

  return (
    <InputStateContext.Provider value={state}>
      <InputDispatchContext.Provider value={dispatch}>
        <PreviewGetContext.Provider value={previewData}>
          <PreviewSetContext.Provider value={setPreviewData}>
            {children}
          </PreviewSetContext.Provider>
        </PreviewGetContext.Provider>
      </InputDispatchContext.Provider>
    </InputStateContext.Provider>
  );
}
