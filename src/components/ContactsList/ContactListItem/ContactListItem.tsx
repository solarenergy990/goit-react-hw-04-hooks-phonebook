import React from 'react';

import s from './ContactListItem.module.css';

interface Props {
  contactName: string;
  contactNumber: string
  onClickRemove: React.MouseEventHandler<HTMLButtonElement>;
}

const ContactListItem = ({ contactName, contactNumber, onClickRemove }: Props) => {
  return (
    <li className={s.listItem}>
      <p className={s.listText}>
        {contactName} : {contactNumber}
      </p>
      <button type="button" className={s.button} onClick={onClickRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;


