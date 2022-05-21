const editUser = (users, setUsers, values, editId) =>{
    // console.log("userid"+ userId)
    
    let newUserIndex = users.findIndex(user => {return user.id == editId})
    console.log(newUserIndex);
    let newUsers = users;
    newUsers[newUserIndex] = { id : editId,
    ...values}
    // { id : editId,
    // ...values}
    // let newUsers = users
    // newUsers.push(newUser)
    setUsers(newUsers)
    // setUserId(id+1)
    console.log("edit users end: "+JSON.stringify(users))

}
export default editUser;