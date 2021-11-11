import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import { 
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER 
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        "type": "personal",
        "_id": "612c4409048e9e65a7333f54",
        "name": "Hoemor Harad",
        "email": "Hoha@email.com",
        "phone": "112-411-1151"
      },
      {
        "type": "professional",
        "_id": "612c43d9048e9e65a7333f52",
        "name": "Somer Asmmoer",
        "email": "asmso@email.com",
        "phone": "111-111-1111"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  }

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      { props.children }
    </ContactContext.Provider>
  );
}

export default ContactState;