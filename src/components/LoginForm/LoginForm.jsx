import css from './LoginForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { myFetch } from '../../utils';
import { useContext } from 'react';
import { AuthContext } from '../../store/authContext';
import Input from './../UI/Input/Input';
import Button from './../UI/Button/Button';

const initValues = {
  email: 'eve.holt@reqres.in',
  password: '12345',
};
function LoginForm(props) {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(7).required(),
    }),
    onSubmit: async (values) => {
      // fetch or axios https://reqres.in/api/login
      // ir iskonsolinti atsakyma
      // console.log('submiting values ===', values);
      const result = await myFetch('https://reqres.in/api/login', 'POST', values);
      if (!result.token) {
        console.log('klaida');
        return;
      }
      // klaidos nera ir turim token
      // login() is kontexto ir paduosim token
      login(result.token);
      props.onSuccessLogin();
      console.log('result ===', result);
    },
  });

  // console.log('formik.touched ===', formik.touched);
  // console.log('formik.values ===', formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name='email'
        type='text'
        placeholder='Your email'
        errorMsg={formik.touched.email && formik.errors.email}
      />

      <Input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errorMsg={formik.touched.password && formik.errors.password}
        name='password'
        type='password'
        placeholder='Your password'
      />

      <Button variant='danger' type='submit'>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
