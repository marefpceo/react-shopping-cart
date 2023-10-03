import { PropTypes } from 'prop-types';

function Button({ id, buttonType, style, text, handleClick }) {
  return (
    <button id={id} style={style} type={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  buttonType: PropTypes.string,
  border: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
