import React from 'react'
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFIlter from '../contacts/ContactFIlter';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFIlter />
        <Contacts />
      </div>
    </div>
  )
}

export default Home;
