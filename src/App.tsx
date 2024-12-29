import { useEffect, useState } from "react";
import "./App.css";
import AddContactArea from "./Components/AddContactArea";
import { ContactProp } from "./Components/ContactItem";
import ContactListArea from "./Components/ContactListArea";
import ContactContext from "./Components/Context";

function App() {
  document.title = "Contacts List App";
  const contactDataExample = [
    {
      name: "Minh Trường",
      phoneNumber: "0345564926",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const getInitialContacts = (): ContactProp[] => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactDataExample;
  };

  const [contacts, setContact] = useState<ContactProp[]>(getInitialContacts);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact: ContactProp) => {
    setContact([...contacts, newContact]);
  };
  const removeContact = (phoneNumber: string) => {
    setContact(contacts.filter((item) => item.phoneNumber !== phoneNumber));
  };
  const editContact = (newContact: ContactProp, oldNumber: string) => {
    const newContacts = contacts.map((item) => {
      if (item.phoneNumber === oldNumber) {
        const phoneRe = /^0[0-9]{9}$/;
        if (!phoneRe.test(newContact.phoneNumber)) {
          alert("Phone number must be 10 digits");
          return item;
        }
        return newContact;
      }
      return item;
    });
    setContact(newContacts);
  };
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="">
        <ContactContext.Provider
          value={{
            contacts: contacts,
            addContact: addContact,
            removeContact: removeContact,
            editContact: editContact,
          }}
        >
          <AddContactArea />
          <ContactListArea />
        </ContactContext.Provider>
      </div>
    </div>
  );
}

export default App;
