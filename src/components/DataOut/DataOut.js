
import { useDispatch, useSelector} from 'react-redux';
import { deluser } from 'phonebookStore/phonebookSlice';

// add css modules
import o from '../DataOut/DataOut.module.css';

export const DataOut = ({ print }) => {
  
  const selector = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();
  // chage data in App 'state' (delete user)
  const deleteUser = evt => {
    dispatch(deluser(evt.target.name));
  };

  // out data in App 'state' if user name or number contain filter
  return print.name
    .toLowerCase()
    .includes(selector) ? (
    <li className={o.item}>
      <p>{print.name}</p>
      <button
        className={o.button}
        name={print.id}
        type="button"
        onClick={deleteUser}
      >
        Delete
      </button>
    </li>
  ) : (
    ''
  );
}