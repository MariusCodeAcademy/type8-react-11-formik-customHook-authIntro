import css from './Input.module.css';
import PropTypes from 'prop-types';

function Input({
  onChange,
  errorMsg,
  color = 'light',
  type = 'text',
  children,
  ...rest
}) {
  const showErrror = errorMsg && <p className={css.errorMsg}>{errorMsg}</p>;
  const addErrClass = errorMsg ? css.errField : '';

  if (type === 'textarea') {
    return (
      <div>
        <textarea
          className={`${css.input} ${css.txa} ${css[color]} ${addErrClass}`}
          {...rest}
        >
          {children}
        </textarea>
        {showErrror}
      </div>
    );
  }

  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        className={`${css.input} ${css[color]} ${addErrClass}`}
        {...rest}
      />
      {showErrror}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['text', 'textarea', 'password', 'email']),
  value: PropTypes.string,
  errorMsg: PropTypes.string,
};
export default Input;
