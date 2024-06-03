import GeneralEntry from '../GeneralEntry';
import EducationEntry from '../EducationEntry';
import WorkEntry from '../WorkEntry';
import './index.css';

export default function DataEntry({ cvPreviewData, setCvPreviewData }) {
  return (
    <>
      <GeneralEntry
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />

      <EducationEntry
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />

      <WorkEntry
        cvPreviewData={cvPreviewData}
        setCvPreviewData={setCvPreviewData}
      />
    </>
  );
}
