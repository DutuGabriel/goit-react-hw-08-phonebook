import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flex, Button } from '@chakra-ui/react';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Flex as="nav" gap={4} p={4} justifyContent="center" wrap="wrap">
      <Button as={NavLink} to="/register" colorScheme="teal" variant="outline">
        Register
      </Button>
      <Button as={NavLink} to="/login" colorScheme="teal" variant="outline">
        Login
      </Button>
      {isLoggedIn && (
        <Button as={NavLink} to="/contacts" colorScheme="teal">
          Contacts
        </Button>
      )}
    </Flex>
  );
};

export default Navigation;
