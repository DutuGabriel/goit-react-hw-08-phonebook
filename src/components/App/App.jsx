import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchContacts } from '../../redux/contactsSlice';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import Login from '../Login/Login';
import Register from '../Register/Register';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <UserMenu />
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <Register />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <div>
                <h1 className={styles.title}>Phonebook</h1>
                <ContactForm />
                <h2 className={styles.subtitle}>Contacts</h2>
                <Filter />
                <ContactList />
              </div>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
