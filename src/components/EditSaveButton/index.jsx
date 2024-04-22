import './index.css';

export default function EditSaveButton({ onClick, submitted = false }) {
  return (
    <button className="container-button" onClick={onClick}>
      {submitted ? 'Edit' : 'Save'}
    </button>
  );
}
