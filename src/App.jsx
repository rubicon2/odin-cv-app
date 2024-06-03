import DataEntry from './components/DataEntry';
import CvPreview from './components/CvPreview';
import { CvAppReducer, initialState } from './reducers/CvAppReducer';
import {
  InputStateContext,
  InputDispatchContext,
  PreviewGetContext,
  PreviewSetContext,
} from './contexts/CvAppContext';
import { useState, useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);
  const [cvPreviewData, setCvPreviewData] = useState(state);

  return (
    <>
      <h1 className="app-title">CV App</h1>
      <div className="app-container">
        <InputStateContext.Provider value={state}>
          <InputDispatchContext.Provider value={dispatch}>
            <PreviewGetContext.Provider value={cvPreviewData}>
              <PreviewSetContext.Provider value={setCvPreviewData}>
                <div className="app-container-col input-area">
                  <DataEntry />
                </div>
              </PreviewSetContext.Provider>
            </PreviewGetContext.Provider>
          </InputDispatchContext.Provider>
        </InputStateContext.Provider>
        <div>
          <h2 className="preview-title">Preview</h2>
          <PreviewGetContext.Provider value={cvPreviewData}>
            <div className="cv-preview-area">
              <CvPreview />
            </div>
          </PreviewGetContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
