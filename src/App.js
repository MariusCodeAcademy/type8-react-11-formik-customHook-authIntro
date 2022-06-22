import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        {/* negeneruoti route /about jei nesam prisilogine */}
        <Route path='/about'>
          <AboutPage />
        </Route>
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
