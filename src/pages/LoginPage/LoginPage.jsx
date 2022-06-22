// import css from './LoginPage.module.css'

import { useHistory } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginPage(props) {
  const history = useHistory();
  function handleSuccessLogin() {
    // TODO: redirect to about
    history.replace('/about');
  }

  return (
    <div>
      <h1>Login here</h1>
      <LoginForm onSuccessLogin={handleSuccessLogin} />
    </div>
  );
}
export default LoginPage;
