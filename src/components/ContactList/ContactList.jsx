import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/contactsOps.js';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const userFilter = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {userFilter.map(contact => (
        <li key={contact.id} className={css.contact}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDelete={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
