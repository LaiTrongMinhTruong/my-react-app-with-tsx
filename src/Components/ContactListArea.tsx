import { useContext, useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import ContactControlContext from "./Context";

const ContactListArea = () => {
  const { contacts } = useContext(ContactControlContext);
  const [input, setInput] = useState<string>("");
  const [filterContacts, setFilterContacts] = useState(contacts);
  const [sortName, setSortName] = useState(true);
  useEffect(() => {
    const outputContacts = contacts.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    if (sortName) {
      outputContacts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      outputContacts.sort((a, b) => {
        return a.phoneNumber.localeCompare(b.phoneNumber);
      });
    }
    setFilterContacts(outputContacts);
  }, [input, contacts, sortName]);
  const handleSort = () => {
    setSortName(!sortName);
  };
  return (
    <>
      <div className="flex flex-col items-center w-3/2">
        <div className="p-4 m-4">
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 m-2 rounded-lg bg-gray-100"
          />
          <button
            onClick={handleSort}
            className="p-2 m-2 rounded-lg bg-sky-500 text-white font-bold text-xl inline-block"
          >
            {sortName ? "Now sorting by name" : "Now sorting by phone"}
          </button>
        </div>
        <ul role="list" className="flex flex-wrap justify-center flex-row">
          {filterContacts.map((item) => (
            <ContactItem
              name={item.name}
              phoneNumber={item.phoneNumber}
              imageUrl={item.imageUrl}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactListArea;
