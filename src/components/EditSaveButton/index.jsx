import './index.css';

export default function EditSaveButton({
  type = 'submit',
  onClick,
  submitted = false,
}) {
  return (
    <button className="edit-save-button" type={type} onClick={onClick}>
      {submitted ? 'Edit' : 'Save'}
    </button>
  );
}
