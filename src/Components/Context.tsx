import { createContext } from "react";
import { ContactProp } from "./ContactItem";

type ContactContextType = {
  contacts: ContactProp[];
  addContact: (contact: ContactProp) => void;
  removeContact: (phoneNumber: string) => void;
  editContact: (newContact: ContactProp, oldNumber: string) => void;
};
const ContactControlContext = createContext<ContactContextType>({
  contacts: [],
  addContact: () => {},
  removeContact: () => {},
  editContact: () => {},
});

export default ContactControlContext;
