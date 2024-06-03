import DataEntry from './components/DataEntry';
import CvPreview from './components/CvPreview';
import { CvAppReducer, initialState } from './reducers/CvAppReducer';
import { StateContext, DispatchContext } from './contexts/CvAppContext';
import { useState, useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);
  const [cvPreviewData, setCvPreviewData] = useState(state);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <h1 className="app-title">CV App</h1>
        <div className="app-container">
          <div className="app-container-col input-area">
            <DataEntry
              state={state}
              dispatch={dispatch}
              cvPreviewData={cvPreviewData}
              setCvPreviewData={setCvPreviewData}
            />
          </div>
          <div>
            <h2 className="preview-title">Preview</h2>
            <div className="cv-preview-area">
              <CvPreview state={cvPreviewData} />
            </div>
          </div>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
