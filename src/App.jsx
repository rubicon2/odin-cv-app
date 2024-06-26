import { useState } from 'react';

import DataEntry from './components/DataEntry';
import CvPreview from './components/CvPreview';

import InputDataProvider from './providers/InputDataProvider';
import { PreviewGetContext } from './contexts/CvAppContext';
import { initialState } from './reducers/CvAppReducer';

import './App.css';

function App() {
  const [cvPreviewData, setCvPreviewData] = useState(initialState);

  const updateCvPreview = (updates) => {
    setCvPreviewData({ ...cvPreviewData, ...updates });
  };

  return (
    <>
      <h1 className="app-title">CV App</h1>
      <div className="app-container">
        <InputDataProvider setPreviewData={updateCvPreview}>
          <div className="app-container-col input-area">
            <DataEntry />
          </div>
        </InputDataProvider>
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
