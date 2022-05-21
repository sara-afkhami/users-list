import React from 'react'
import removeUser from "../utils/removeUser"
import RemoveUserButtons from "./RemoveUserButtons"


const RemoveUserModal = (props) => {

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Remove user
                            </h3>

                        </div>
                        {/*body*/}
                        <p className='px-6 py-4'>Are You Sure To Delete This User?</p>
                        <RemoveUserButtons users={props.users} setUsers={props.setUsers} removeId={props.removeId} setRemoveModal={props.setRemoveModal} removeUser={removeUser} />
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default RemoveUserModal;