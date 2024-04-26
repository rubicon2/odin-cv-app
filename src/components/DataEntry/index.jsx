import GeneralEntry from '../GeneralEntry';
import EducationEntry from '../EducationEntry';
import WorkEntry from '../WorkEntry';

export default function DataEntry({
  state,
  dispatch,
  cvPreviewData,
  setCvPreviewData,
}) {
  return (
    <>
      <GeneralEntry
        state={state}
        dispatch={dispatch}
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />

      <EducationEntry
        state={state}
        dispatch={dispatch}
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />

      <WorkEntry
        state={state}
        dispatch={dispatch}
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />
    </>
  );
}
