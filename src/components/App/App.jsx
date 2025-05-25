import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchContacts } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import UserMenu from '../UserMenu/UserMenu';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <UserMenu />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <>
              <h1 className={styles.title}>Phonebook</h1>
              <ContactForm />
              <h2 className={styles.subtitle}>Contacts</h2>
              <Filter />
              <ContactList />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
