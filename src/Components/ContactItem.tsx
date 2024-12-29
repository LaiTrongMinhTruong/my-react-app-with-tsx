import { useContext, useState } from "react";
import ContactControlContext from "./Context";
import EditBox from "./EditBox";

export type ContactProp = {
  name: string;
  phoneNumber: string;
  imageUrl: string;
};

const ContactItem = ({ name, phoneNumber, imageUrl }: ContactProp) => {
  const { removeContact } = useContext(ContactControlContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleEditClick = () => {
    setIsOpen(true);
  }
  const handleCloseModal = () => {
    setIsOpen(false);
  }
  return (
    <li key={phoneNumber} className="m-4">
      <div className="flex items-center gap-x-6 bg-gray-100 w-96 p-4 rounded-lg shadow-lg">
        <img
          alt=""
          src={
            imageUrl ||
            "https://i.pinimg.com/736x/8f/1c/a2/8f1ca2029e2efceebd22fa05cca423d7.jpg"
          }
          className="size-16 rounded-full"
        />
        <div className="grow">
          <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm/6 font-semibold text-green-600">
            {phoneNumber}
          </p>
        </div>

        <button
          className="bg-red-600 size-19 rounded-lg hover:bg-orange-400 text-base font-bold text-white shadow-lg p-2"
          onClick={() => removeContact(phoneNumber)}
        >
          Remove
        </button>
        <button
          onClick={handleEditClick}
          className="bg-green-500 rounded-lg size-19 hover:bg-orange-400 text-base font-bold text-white shadow-lg p-2"
        >
          {" "}
          Edit
        </button>
      </div>
      {isOpen && (
        <EditBox name={name} phoneNumber={phoneNumber} imageUrl={imageUrl} callback={handleCloseModal}/>
        )}
    </li>
  );
};

export default ContactItem;
