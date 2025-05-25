import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
