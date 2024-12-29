import { useContext, useState } from "react";
import { ContactProp } from "./ContactItem";
import ContactControlContext from "./Context";

export default function AddContactArea() {
  const { addContact } = useContext(ContactControlContext);
  const phoneRegex = /^0[0-9]{9}$/;

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleAddContact = () => {
    if (phoneRegex.test(phoneNumber)) {
      const newContact: ContactProp = { name, phoneNumber, imageUrl };
      addContact(newContact);
      setName("");
      setPhoneNumber("");
      setImageUrl("");
    } else {
      alert("Invalid phone number");
    }
  };

  return (
    <div className="max-w-xl bg-sky-500 p-4 rounded-lg shadow-lg h-fit float-right right-32 mr-16">
      <h2 className="text-pretty text-3xl tracking-tight text-white font-bold sm:text-4xl text-center mb-4">
        Add Contact
      </h2>
      <div className="flex flex-row w-full justify-around items-center">
        <ul>
          <li>
            <input
              type="text"
              value={name}
              placeholder="Name here"
              className="p-2 m-2 rounded-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </li>

          <li>
            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone number here"
              className="p-2 m-2 rounded-lg"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              value={imageUrl}
              placeholder="Image URL here"
              className="p-2 m-2 rounded-lg"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </li>
        </ul>
        <button
          className="bg-green-600 size-20 rounded-lg hover:bg-orange-400 text-lg font-bold text-white shadow-lg"
          onClick={handleAddContact}
        >
          Add
        </button>
      </div>
    </div>
  );
}
