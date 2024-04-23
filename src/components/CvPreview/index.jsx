import EducationPreview from '../EducationPreview';
import GeneralPreview from '../GeneralPreview';
import WorkPreview from '../WorkPreview';

import './index.css';

export default function CvPreview({ state }) {
  const headingPreview = (
    <GeneralPreview
      firstName={state.firstName}
      lastName={state.lastName}
      email={state.email}
      tel={state.tel}
    />
  );
  const educationPreview = (
    <EducationPreview educationArray={state.education} />
  );
  const workPreview = <WorkPreview workArray={state.work} />;

  return (
    <div className="cv-preview">
      {headingPreview}
      {educationPreview}
      {workPreview}
    </div>
  );
}
