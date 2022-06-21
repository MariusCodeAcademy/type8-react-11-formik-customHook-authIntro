import { useFormik } from 'formik';

const initValues = {
  email: '',
  password: '',
};
function LoginForm() {
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: (values) => {
      console.log('submiting values ===', values);
    },
  });

  // console.log('formik.values ===', formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        value={formik.values.email}
        name='email'
        type='text'
        placeholder='Your email'
      />
      <input
        onChange={formik.handleChange}
        value={formik.values.password}
        name='password'
        type='password'
        placeholder='Your password'
      />
      <button type='submit'>Login</button>
    </form>
  );
}

export default LoginForm;
