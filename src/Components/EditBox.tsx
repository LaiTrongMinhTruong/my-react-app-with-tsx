import { useContext, useState } from "react";
import ContactControlContext from "./Context";

const EditBox = ({
  name,
  phoneNumber,
  imageUrl,
  callback,
}: {
  name: string;
  phoneNumber: string;
  imageUrl: string;
  callback: VoidFunction;
}) => {
  const { editContact } = useContext(ContactControlContext);
  const [editedName, setEditedName] = useState<string>(name);
  const [editedPhoneNumber, setEditedPhoneNumber] =
    useState<string>(phoneNumber);
  const [editedImageUrl, setEditedImageUrl] = useState<string>(imageUrl);
  const onSave = () => {
    editContact(
      {
        name: editedName,
        phoneNumber: editedPhoneNumber,
        imageUrl: editedImageUrl,
      },
      phoneNumber
    );
    callback();
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-sky-500 p-4 rounded-lg shadow-lg h-fit">
          <div>
            <input
              className="p-4 box-border rounded-lg"
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Name here"
            />
          </div>
          <div>
            <input
              className="p-4 box-border rounded-lg my-3"
              type="text"
              value={editedPhoneNumber}
              onChange={(e) => setEditedPhoneNumber(e.target.value)}
              placeholder="Phone number here"
            />
          </div>
          <div>
            <input
              className="p-4 box-border rounded-lg"
              type="text"
              value={editedImageUrl}
              onChange={(e) => setEditedImageUrl(e.target.value)}
              placeholder="Image URL here"
            />
          </div>
          <div>
            <button
              onClick={onSave}
              className="p-4 text-white rounded-lg bg-green-600 mt-3 hover:bg-orange-400"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBox;
