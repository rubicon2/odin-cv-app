import { useContext } from 'react';
import { PreviewGetContext } from '../../contexts/CvAppContext';
import './index.css';

export default function EducationPreview() {
  const { education } = useContext(PreviewGetContext);

  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  });

  const entries = education.map((entry) => {
    let startDate = '';
    let endDate = '';
    // Need to wrap in try catch since if entry dates have not been filled in yet, will throw an error
    try {
      startDate = dateFormatter.format(new Date(entry.startDate));
      endDate = dateFormatter.format(new Date(entry.endDate));
    } catch (error) {
      console.error(error);
    }
    let dateString = `${startDate}`;
    if (entry.current) dateString += ' - present';
    // If start and end date are the same month, display e.g. 'April 2024' instead of 'April 2024 - April 2024'
    else if (startDate !== endDate) dateString += ` - ${endDate}`;
    return (
      <div className="cv-education-preview-item" key={entry.id}>
        <div className="cv-preview-heading cv-education-preview-place">
          {entry.place}
        </div>
        <div className="cv-preview-dates cv-education-preview-dates">
          {dateString}
        </div>
        <div className="cv-light-text cv-education-preview-summary">
          {entry.summary}
        </div>
      </div>
    );
  });

  if (entries.length === 0) return null;

  return (
    <div className="cv-education-preview">
      <div className="cv-preview-section-heading">Education</div>
      {entries}
    </div>
  );
}
