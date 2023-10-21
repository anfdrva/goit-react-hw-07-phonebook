import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { ColorRing, FallingLines } from 'react-loader-spinner';
import { useState } from 'react';

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const [isLoadingMap, setIsLoadingMap] = useState({});

  const handleClickDeleteButton = event => {
    const { value } = event.currentTarget;
    if (isLoadingMap[value]) {
      return;
    }
    setIsLoadingMap(prevState => ({
      ...prevState,
      [value]: true,
    }));
    dispatch(deleteContact(value));
  };

  return (
    <div>
      <ul>
        {isError && <p style={{ color: 'red', fontSize: 18 }}>{isError}</p>}
        {isLoading && contacts.length === 0 ? (
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        ) : (
          filteredContacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}:</p>
              <p>{contact.phone}</p>
              <button
                type="button"
                name="delete"
                value={contact.id}
                disabled={isLoadingMap[contact.id]}
                onClick={handleClickDeleteButton}
              >
                {' '}
                {isLoadingMap[contact.id] && (
                  <ColorRing visible={true} height="18" width="18" />
                )}{' '}
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ContactsList;