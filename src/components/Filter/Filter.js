import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { filter } from 'redux/contacts/contactsAction';
import { StyledFilter } from './Filter.styled';

  export const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilteredContacts);

    const inputChange = e => {
      const changeValue = e.target.value;
      dispatch(filter(changeValue));
    };

    return (
      <div>
            <StyledFilter>Find contacts by name</StyledFilter>
            <input type='text' name='number' value={filterValue} onChange={inputChange} placeholder='Enter name' />
        </div>);
};