const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const user$$ = users.map((user)=>{
    return user.name.startsWith("A") ? {
        name: "Anacleto"
    } :{...user}
})

console.log(user$$);