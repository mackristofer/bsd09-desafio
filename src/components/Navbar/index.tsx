import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { useContext, useEffect } from 'react';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { AuthContext } from 'AuthContext';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar main-nav">
      <NavLink to="/movies" className="nav-logo-text">
        <h4>MOVIEFLIX</h4>
      </NavLink>
      {authContextData.authenticated ? (
        <div className="nav-login-logout">
          <a href="#logout" onClick={handleLogoutClick}>
            SAIR
          </a>
        </div>
      ) : undefined}
    </nav>
  );
};

export default Navbar;
