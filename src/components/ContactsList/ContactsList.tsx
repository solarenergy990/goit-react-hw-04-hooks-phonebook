import React from 'react';

import ContactListItem from './ContactListItem/ContactListItem';
import s from './ContactsLIst.module.css';
import IContact from '../../interfaces/Contact.interface'


interface Props {
  contacts: IContact[];
  onContactDelete: (contactId: string) => void;
  children?: JSX.Element;
}

const ContactsList = ({ contacts, onContactDelete, children }: Props) => {
  return (
    <div className={s.contacts}>
      {children}
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <ContactListItem
              key={id}
              contactName={name}
              contactNumber={number}
              onClickRemove={() => onContactDelete(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
