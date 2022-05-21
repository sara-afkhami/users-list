const Table = (props) => {
    // console.log("table" + JSON.stringify(props.users[0]))
    const editClicked=(event)=>{
        props.setEditId(event.currentTarget.id)
        console.log("first"+props.editId)
        props.setEditModal(true); 
    }
    const deleteClicked = (event) =>{
        props.setRemoveId(event.currentTarget.id)
        console.log("second"+props.removeId)
        props.setRemoveModal(true); 
        // console.log(remove)
    }
    const fillRows = (users) => {

        let usersList = users.map((user) =>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        {/* <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-1" class="sr-only">checkbox</label> */}
                    </div>
                </td>
                <td className="px-6 py-4 ">
                    {user.firstName}
                </td>
                <td className="px-6 py-4">
                    {user.lastName}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td class="py-4 text-right">
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                    <button id={user.id} onClick={editClicked}  className=" font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <button id={user.id} onClick={deleteClicked} className="px-4  font-medium text-red-600 dark:text-red-500 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg></button>
                </td>


            </tr>
        )
        return usersList;
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg space">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                {/* <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all" class="sr-only">checkbox</label> */}
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            first Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {fillRows(props.users)}
                </tbody>
            </table>
        </div>
    )
}
export default Table;