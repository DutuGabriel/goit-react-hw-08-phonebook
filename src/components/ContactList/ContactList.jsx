import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) {
    return (
      <Box textAlign="center" mt={6}>
        <Spinner size="lg" />
        <Text mt={2}>Loading contacts...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" mt={4}>
        <AlertIcon />
        Error: {error}
      </Alert>
    );
  }

  return (
    <Box maxW="md" mx="auto" mt={6}>
      <List spacing={3}>
        {filteredContacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid #ccc"
            borderRadius="md"
            p={3}
          >
            <Text>
              {name}: {number}
            </Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;
