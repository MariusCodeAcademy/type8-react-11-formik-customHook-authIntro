import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  customFontSize = null,
}) {
  const styles = {
    fontSize: customFontSize + 'px',
  };
  return (
    <button
      style={customFontSize ? styles : {}}
      className={`${css.btn} ${css[variant] || ''} ${css[size] || ''}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  customFontSize: PropTypes.number,
};

export default Button;
