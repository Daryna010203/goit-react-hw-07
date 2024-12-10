import css from './App.module.css';

import Layout from '../Layout/Layout.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contactsSlice.js';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps.js';
import Loader from '../Loader/Loader.jsx';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
