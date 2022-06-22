import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
});

AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const [token, setToken] = useState(localStorage.getItem('token-prot'));
  // infered value / calculated value
  const isUserLoggedIn = !!token;
  // console.log('isUserLoggedIn ===', isUserLoggedIn);
  function login(userToken) {
    setToken(userToken);
    localStorage.setItem('token-prot', userToken);
  }
  function logout() {
    setToken(null);
    localStorage.removeItem('token-prot');
  }

  const ctx = {
    login,
    logout,
    isUserLoggedIn,
  };
  return <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>;
}

export default AuthProvider;

// custom hook for context
export function useAuthCtx() {
  return useContext(AuthContext);
}
