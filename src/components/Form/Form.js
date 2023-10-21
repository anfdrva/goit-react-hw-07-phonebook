import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts,selectIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { ColorRing } from 'react-loader-spinner';

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = (name, phone) => {
  const newContact = { name: name.trim(), phone: phone.trim() };
  dispatch(addContact(newContact));
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const existingContact = contacts.find(
      contact => contact.name === name.trim()
    );
    if (existingContact) {
      alert(name + ' is already in contacts!');
      reset();
      return;
    }
    handleAddContact(name, phone);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            value={phone}
            onChange={handleChange}
            type="tel"
            name="phone"
            pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" disabled={isLoading }> {isLoading && contacts.length !== 0  ? <ColorRing
  visible={true}
  height="20"
  width="20"

/> : 'Add contact'}</button>
      </form>
    </div>
  );
}

export default ContactForm;