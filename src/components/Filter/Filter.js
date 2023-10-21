import { setFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
}

export default Filter;