import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/formSlice';

const Form = () => {
    const details = useSelector(state => state.formStore);

    const [formData, setFormData] = useState({
        fullname: '',
        gender: '',
        city: '',
        hobbies: []
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == 'checkbox') {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    hobbies: [...prevData.hobbies, value]
                }));
            }
            else {
                setFormData((prevData) => ({
                    ...prevData,
                    hobbies: prevData.hobbies.filter((hobby) => hobby !== value)
                }));
            }
        }
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    }

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        dispatch(add(formData));
        setTimeout(() => {
            setFormData({
                fullname: '',
                gender: '',
                city: '',
                hobbies: []
            });
        }, 100);
    }

    const getDetails = () => {
        console.log(details);
    }
    return (
        <>
            <div className="container mx-auto p-4">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text-input">
                            Fullname
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="text-input"
                            name='fullname'
                            type="text"
                            placeholder="John Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="radio"
                                id="radio-option1"
                                name="gender"
                                value="Male"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="radio-option1">
                                Male
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="radio"
                                id="radio-option2"
                                name="gender"
                                value="Female"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="radio-option2">
                                Female
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown-select">
                            City
                        </label>
                        <select
                            name='city'
                            onChange={handleChange}
                            defaultValue="New Mexico"
                            className="block appearance-none w-full shadow border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Hobbies</label>
                        <div className="flex items-center">
                            <input
                                name='hobbies'
                                className="mr-2 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                type="checkbox"
                                id="checkbox-option1"
                                value="Reading Books"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="checkbox-option1">
                                Reading Books
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="checkbox-option2"
                                value="Gaming"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="checkbox-option2">
                                Gaming
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="checkbox-option2"
                                value="Travel"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="checkbox-option2">
                                Travel
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="checkbox-option2"
                                value="Learning"
                                onChange={handleChange}
                            />
                            <label className="text-sm" htmlFor="checkbox-option2">
                                Learning
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-1">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 text-sm rounded-full"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button
                            className="bg-transparent hover:bg-gray-100 hover:text-blue-600 text-blue-400 font-semibold py-2 px-4 text-sm border border-blue-500 hover:border-blue-500 rounded-full"
                            type="button"
                        >
                            Clear
                        </button>
                    </div>
                </form>

                <button onClick={getDetails}>Show</button>
{/* 
                <p>
                    {details}
                </p> */}
            </div>

        </>
    )
}

export default Form;