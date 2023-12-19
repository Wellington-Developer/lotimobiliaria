// Styles
import './style.css';

export const ButtonForm = ({ inner, ...props }) => {
  return (
    <button 
    {...props} 
    className="button-form">
      {inner}
    </button>
  )
}