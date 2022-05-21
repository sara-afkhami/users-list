const removeUser = (users, setUsers, removeId) =>{
    // console.log("userid"+ userId)
    
    let newUserIndex = users.findIndex(user => {return user.id == removeId})
    console.log("innnnnnnnn remove------"+ newUserIndex);
    let newUsers = users;
    let removed = newUsers.splice(newUserIndex,1)
    console.log("removed bye"+JSON.stringify(removed))
    // { id : editId,
    // ...values}
    // let newUsers = users
    // newUsers.push(newUser)
    setUsers(newUsers)
    // setUserId(id+1)
    console.log("remove users end: "+JSON.stringify(users))

}
export default removeUser;