import React from 'react'
import removeUser from "../utils/removeUser"
const Buttons = (props) =>{
    const onSubmit = () =>{
        removeUser(props.users, props.setUsers, props.removeId)
        props.setRemoveModal(false)
    }
    return(
        <div className="flex items-center justify-end pt-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => props.setRemoveModal(false)}
            >
              Close
            </button>
            <button
              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={onSubmit}
            >
              Delete
            </button>
          </div>
    )
}

const RemoveModal = (props) => {

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
                        <Buttons users={props.users} setUsers={props.setUsers} removeId={props.removeId} setRemoveModal={props.setRemoveModal} />
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default RemoveModal;