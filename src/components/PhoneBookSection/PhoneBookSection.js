// get components link from 'components' directory
import { DataIn } from '../DataIn/DataIn';
import { DataOut } from '../DataOut/DataOut';
import { FindContacts } from '../FindContacts/FindContacts';
import { useSelector } from 'react-redux';

// add css modules
import phoneSec from './PhoneBookSection.module.css';

export const PhoneBookSection = () => {

  const selector = useSelector(state => state.phonebook.contacts);
    // console.log(selector);
    // <DataIn> - this component performs save input data and validation.
    // here change THIS state and main state in App.
    // <FindContacts - this component change 'filter' property in App 'state'
    // this value use in <Dataout> component for out users
    
  return (
    <div className={phoneSec.section}>
      <DataIn/>

      <p>Contacts</p>
      <FindContacts/>

      <ul className={phoneSec.list}>
        {selector !== undefined ? selector.map(result => {
          return (
            <DataOut
              key={result.id}
              print={result}
            />
          );
        }): ''}
       </ul>
    </div>
  );
}