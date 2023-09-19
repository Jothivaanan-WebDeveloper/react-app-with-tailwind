import React, { useEffect, useState } from 'react';

export default function EditModal(props) {
  const data = props.data;
  const [formData, setFormData] = useState({
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email
  });

  useEffect(() => {
    if (data) {
      setFormData({
        id: data.id,
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        email: data.email || ''
      });
    }
  }, [data]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClose();
    props.updatedData(formData);
  }

  return (
    <div className={`fixed inset-0 z-50 ${props.isOpen ? '' : 'hidden'} overflow-auto bg-gray-800 bg-opacity-50`}>
      <div className="modal-container p-4 mx-auto my-16 max-w-md rounded shadow-lg bg-white">

        <h2 className="text-xl font-semibold mb-3 border-b border-grey-200">Edit Item</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleOnChange}
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={formData.first_name}
              name="first_name"
              onChange={handleOnChange}
              id="firstName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={formData.last_name}
              name="last_name"
              onChange={handleOnChange}
              id="lastName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-4 flex justify-end gap-1">
            <button type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 text-sm rounded-full">
              Change
            </button>
            <button type="button" onClick={props.onClose}
              className="bg-transparent hover:bg-gray-100 hover:text-blue-600 text-blue-400 font-semibold py-2 px-4 text-sm border border-blue-500 hover:border-blue-500 rounded-full">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
