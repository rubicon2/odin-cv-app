import './index.css';

export default function WorkPreview({ workArray }) {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  });

  const entries = workArray.map((entry) => {
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
      <div className="cv-work-preview-item" key={entry.id}>
        <span className="cv-preview-heading cv-work-preview-company">
          {entry.company}
        </span>
        <span className="cv-work-preview-role"> - {entry.role}</span>
        <div className="cv-preview-dates cv-work-preview-period">
          {dateString}
        </div>
        <div className="cv-light-text cv-work-preview-summary">
          {entry.summary}
        </div>
      </div>
    );
  });
  return (
    <div className="cv-work-preview">
      <div className="cv-preview-section-heading">Experience</div>
      {entries}
    </div>
  );
}
