import { PropTypes } from 'prop-types';

function Button({ id, buttonType, style, text }) {
  return (
    <button id={id} style={style} type={buttonType}>
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
};

export default Button;
