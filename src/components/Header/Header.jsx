import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  // useContext ir pagal isLoggedin rodom arba nerodom
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <header className={css.header}>
      <nav>
        {isUserLoggedIn && (
          <NavLink className={css.navLink} to='/about'>
            About
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className={css.navLink} to='/login'>
            Login
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className={css.navLink} to='/register'>
            Register
          </NavLink>
        )}
        {isUserLoggedIn && (
          <NavLink className={css.navLink} to='/logout'>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
