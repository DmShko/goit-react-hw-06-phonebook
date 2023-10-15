import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

 const reducer = (state, action) => {
  
    switch(action.type) {
      // add/change contact
      case 'plus': 
        //find repeat contact
        if (
          state.contacts.find(
            element => element.name === [action.payload.name, action.payload.number].join(' ')
          ) !== undefined
        ) {
          Notiflix.Notify.warning(`"${action.payload.name}" is already in contacts!`, {position: 'center-top', fontSize: '24px',});
          return state;
        } 
        //add new contact with save current value state
        state = {...state, contacts: [...state.contacts, {name: [action.payload.name, action.payload.number].join(' '), id: nanoid(),}]};
        break;
      // delete contact
      case 'minus': 
        state = {...state, contacts: state.contacts.filter(
        element => element.id !== action.payload)}
        break;
      // delete/change contacts render filter    
      case 'filter': 
        state = {...state, filter: action.payload}
      break;

      default: return;
    }

    return state;
  }
  export default reducer;