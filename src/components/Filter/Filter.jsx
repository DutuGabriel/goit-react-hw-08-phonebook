import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
