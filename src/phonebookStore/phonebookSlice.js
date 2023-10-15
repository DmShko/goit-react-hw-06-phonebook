import { createSlice } from "@reduxjs/toolkit";

import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

const phonebookInitialState = {contacts: [], filter: ''};

const phonebookSlice = createSlice(
    {
        name: 'phonebook',
        initialState: phonebookInitialState,
        reducers:{
            add(state, action) {
                
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
                state.contacts.push({name: [action.payload.name, action.payload.number].join(' '), id: nanoid(),});
               
            },
            // delete contact
            deluser(state, action) {
                
                state.contacts = state.contacts.filter(element => element.id !== action.payload);
            },
            // delete/change contacts render filter 
            changeFilter(state, action) {
                state.filter = action.payload;
            },
        }
    }
);

export const {add, deluser, changeFilter} = phonebookSlice.actions;
export default phonebookSlice.reducer;