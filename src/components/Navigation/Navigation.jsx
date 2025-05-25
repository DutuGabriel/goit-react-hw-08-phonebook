import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
