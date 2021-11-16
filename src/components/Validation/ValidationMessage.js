import './index.css';

const ValidationMessage = (props) => {
  return (
    <div className='validation-message'>{props.children}</div>
  )
}

export default ValidationMessage