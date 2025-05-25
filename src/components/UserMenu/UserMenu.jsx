import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Box, Text, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Text fontWeight="bold">{email}</Text>
      <Button colorScheme="teal" size="sm" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
