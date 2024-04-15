import './index.css';

export default function Container({ children, onButtonClick, submitted, className = '' }) {
  return (
    <div className={`container ${className}`}>
      {children}
      <button className='container-button' onClick={onButtonClick}>{submitted ? 'Edit' : 'Submit'}</button>
    </div>
  )
}