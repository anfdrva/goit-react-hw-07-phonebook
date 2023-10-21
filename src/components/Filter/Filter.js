import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from 'redux/contactsReducer';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setContactFilter(event.currentTarget.value));
  };

  return (
    <>
      <label>
        Find contacts by name{' '}
        <input
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

export default Filter;