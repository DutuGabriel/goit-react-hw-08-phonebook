import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isDuplicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name:
        <input type="text" name="name" required className={styles.input} />
      </label>
      <label className={styles.label}>
        Number:
        <input type="tel" name="number" required className={styles.input} />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
