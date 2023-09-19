import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';
import EditModal from './EditModal';

export default function Table() {
    const [rowData, setRowData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState({});

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    const setUpdatedData = (data) => {
        let newData = rowData.map((row) =>
            row.id === data.id ? { ...row, ...data } : row
        );
        setRowData(newData);
    }

    const columnDefs = [
        { headerName: 'ID', field: 'id', flex: 1, filter: true, sort: true, resizable: true, },
        { headerName: 'Email', field: 'email', flex: 1, filter: true, sort: true, resizable: true, },
        { headerName: 'First Name', field: 'first_name', flex: 1, filter: true, sort: true, resizable: true, },
        { headerName: 'Last Name', field: 'last_name', flex: 1, filter: true, sort: true, resizable: true, },
        {
            headerName: 'Photo',
            field: 'avatar',
            flex: 1,
            resizable: true,
            cellRenderer: function (params) {
                const imageUrl = params.value;
                return <img src={imageUrl} alt="Avatar" className='rounded-full' style={{ width: '50px', height: '50px' }} />;
            },
        },
        {
            headerName: 'Action',
            flex: 1,
            cellRenderer: function (params) {
                const setParamsData = () => {
                    setUserData(params.data);
                    openModal();
                }
                const deleteRow = () => {
                    let newData = rowData.filter((row) => row.id !== params.data.id);
                    setRowData(newData);
                }

                return (
                    <>
                        <div className="flex gap-2">
                            <div>
                                <button
                                    onClick={setParamsData}
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 py-0 border border-blue-500 hover:border-transparent rounded"
                                >
                                    Edit
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={deleteRow}
                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-2 py-0 border border-blue-500 hover:border-transparent rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </>
                )
            },
        },
    ];

    const getDetails = async () => {
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const result = await response.json();
        setRowData(result.data);
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <EditModal
                isOpen={isModalOpen}
                onClose={closeModal}
                data={userData}
                updatedData={setUpdatedData}
            />

            <div className="flex justify-center items-center ">
                <div className="w-full max-w-screen-lg bg-white p-4 rounded-lg shadow-lg">
                    {/* Card Header */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Ag-Grid Table</h2>
                    </div>

                    {/* Ag-Grid Component */}
                    <div className="ag-theme-alpine" style={{ height: '500px' }}>
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                            rowHeight={55}
                            autoSizePadding={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}