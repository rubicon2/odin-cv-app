import './index.css';

export default function Container({ children, onButtonClick, submitted }) {
  return (
    <div className="container">
      {children}
      <button className='container-button' onClick={onButtonClick}>{submitted ? 'Edit' : 'Submit'}</button>
    </div>
  )
}