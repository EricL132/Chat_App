

let users = []
function userJoin(id,name,room){
    const user = {id:id,name:name,room:room}
    
    users.push(user)

    return user;
    
}


function getRoomUsers(room){
    const rommUsers = users.filter((user)=>{
        return user.room === room
    })
    return rommUsers
}

function removeUser(id){
    const index = users.findIndex(user=>user.id===id)
    if(index!==-1){
        return users.splice(index,1)[0]
    }
}



module.exports = {userJoin,getRoomUsers,removeUser}