import { useState, useEffect } from 'react';
import IContact from '../interfaces/Contact.interface'

const useLocalStorage = (key: string, defaultValue: IContact[]) => {
  const savedContacts = window.localStorage.getItem(key)
  
  const [state, setState] = useState<IContact[]>(() => {
    
    if (savedContacts && window.localStorage.length > 0) {

      return JSON.parse(savedContacts);
    } else return defaultValue;
    
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorage;
