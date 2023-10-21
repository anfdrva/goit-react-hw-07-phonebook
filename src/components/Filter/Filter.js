import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from 'redux/contactsReducer';
import { getFilter } from 'redux/selectors';
import { StyledFilter } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setContactFilter(event.currentTarget.value));
  };

  return (
    <>
      <StyledFilter>
        Find contacts by name{' '}
        <input
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </StyledFilter>
    </>
  );
};

export default Filter;