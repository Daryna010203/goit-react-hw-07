import css from './App.module.css';

import Layout from '../Layout/Layout.jsx';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

const App = () => {
  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
