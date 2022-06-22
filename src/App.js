import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useAuthCtx } from './store/authContext';

function App() {
  const { isUserLoggedIn } = useAuthCtx();

  // 1. gauti isUserLoggedIn ir priklausomai nuo jo generuoti arba ne /about
  // 2. priklausomai nuio isUserLoggedIn generuoti arba about page arba pranesta kad sis puslapis tik registruotiems vartotojams
  // 3. Sukurti <NotLoggedIn /> komponenta kuri rodom jei useris neturi teises matyti psl
  return (
    <div className='App'>
      <Header />
      <Switch>
        {/* negeneruoti route /about jei nesam prisilogine */}
        <Route path='/about'>
          {isUserLoggedIn ? (
            <AboutPage />
          ) : (
            <>
              <h2>Please login</h2>
              {/* <Link to={'/login'}>Login here</Link> */}
              <LoginForm />
            </>
          )}
        </Route>
        <ProtectedRoute path='/contact'>
          <h2>contact</h2>
        </ProtectedRoute>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route path='*'>
          <h2>404 Not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
