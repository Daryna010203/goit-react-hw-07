import { Field, Form, Formik, ErrorMessage } from 'formik';
import { AddProfileSchema } from '../schemas';
import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const formData = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact(formData));
    resetForm();
  };

  return (
    <div className={css.list}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={AddProfileSchema}
      >
        {() => (
          <Form className={css.form}>
            <label>Name</label>
            <Field
              type="text"
              className={css.text}
              name="name"
              placeholder="Laura Vees"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
            <label>Number</label>
            <Field
              type="text"
              className={css.text}
              name="number"
              placeholder="256-17-88"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
            <button type="submit" className={css.btn}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
