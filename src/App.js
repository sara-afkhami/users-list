import React, { useState } from "react";
import "./App.css";
import Modal from "./components/AddEditUserModal";
import RemoveModal from "./components/RemoveUserModal";
// import addUser from "./utils/addUser";
import Table from "./components/UserTable";
// import "./styles/style.scss"

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(0);
    const [editId, setEditId] = useState(0);
    const [removeId, setRemoveId] = useState(0);
    console.log("users app: " + JSON.stringify(users))
    // const createUser = () => {
    //     const user = {}
    //     users.push(user);
    //     setUsers(users);
    // }
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 space"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add User
            </button>
            {showModal ? (
                <Modal users={users} setUsers={setUsers} setShowModal={setShowModal} userId={userId} setUserId={setUserId} />
            ) : null}
            {editModal ? (
                <Modal users={users} setUsers={setUsers} setShowModal={setEditModal} editId={editId} />
            ) : null}
            {removeModal ? (
                <RemoveModal users={users} setUsers={setUsers} removeId={removeId} setRemoveModal= {setRemoveModal} />
            ) : null}
            <Table users={users} setUsers={setUsers} editModal={editModal} setEditModal={setEditModal} removeModal={setRemoveModal} setRemoveModal={setRemoveModal} editId={editId} setEditId={setEditId} removeId={removeId} setRemoveId={setRemoveId} />
        </>
    );
}
export default App;


