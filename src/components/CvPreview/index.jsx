import EducationPreview from '../EducationPreview';
import GeneralPreview from '../GeneralPreview';
import WorkPreview from '../WorkPreview';
import './index.css';

export default function CvPreview() {
  return (
    <div className="cv-preview">
      <GeneralPreview />
      <EducationPreview />
      <WorkPreview />
    </div>
  );
}
