import './index.css';

export default function EducationPreview({ educationArray }) {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  });

  const entries = educationArray.map((entry) => {
    let startDate = '';
    let endDate = '';
    // Need to wrap in try catch since if entry dates have not been filled in yet, will throw an error
    try {
      startDate = dateFormatter.format(new Date(entry.startDate));
      endDate = dateFormatter.format(new Date(entry.endDate));
    } catch (error) {
      console.error(error);
    }
    // If start and end date are the same month, display e.g. 'April 2024' instead of 'April 2024 - April 2024'
    let dateString = `${startDate}`;
    if (startDate !== endDate) dateString += ` - ${endDate}`;
    return (
      <div className="cv-education-preview-item" key={entry.id}>
        <div className="cv-preview-heading cv-education-preview-place">
          {entry.place}
        </div>
        <div className="cv-preview-dates cv-education-preview-dates">
          {dateString}
        </div>
        <div className="cv-light-text cv-education-preview-qualifications">
          {entry.subject}
        </div>
      </div>
    );
  });

  return (
    <div className="cv-education-preview">
      <div className="cv-preview-section-heading">Education</div>
      {entries}
    </div>
  );
}
