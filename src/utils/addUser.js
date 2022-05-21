const addUser = (users, setUsers, values, userId, setUserId) =>{
    console.log("add users values: "+ values)
    console.log("userid"+ userId)
    let id = userId
    let newUser = { id : userId,
    ...values}
    let newUsers = users
    newUsers.push(newUser)
    setUsers(newUsers)
    setUserId(id+1)
    console.log("add users end: "+JSON.stringify(users))

}
export default addUser;