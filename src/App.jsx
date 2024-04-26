import DataEntry from './components/DataEntry';
import CvPreview from './components/CvPreview';
import { CvAppReducer, initialState } from './reducers/CvAppReducer';
import { useState, useReducer } from 'react';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(CvAppReducer, initialState);
  const [cvPreviewData, setCvPreviewData] = useState(state);

  return (
    <>
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
    </>
  );
}

export default App;
