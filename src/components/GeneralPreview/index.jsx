import './index.css';

export default function GeneralPreview({ firstName, lastName, email, tel }) {
  return (
    <div className="cv-general-preview">
      <h1 className="cv-general-preview-name">{firstName + ' ' + lastName}</h1>
      <div className="cv-general-preview-text">{email}</div>
      <div className="cv-general-preview-text">{tel}</div>
    </div>
  );
}
