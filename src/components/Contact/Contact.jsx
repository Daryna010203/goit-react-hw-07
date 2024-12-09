import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <div className={css.box}>
          <FaUserLarge />
          <span className={css.formInput}>{name}</span>
        </div>
        <div className={css.box}>
          <FaPhone />
          <span className={css.formInput}>{number}</span>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
