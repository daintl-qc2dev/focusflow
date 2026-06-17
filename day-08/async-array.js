// Get users
async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        // console.log("Danh sach users", users);
        return users;
    } catch (error) {
        console.log("Co loi gi do roi", error.message);
    }
}   

//Get user name
async function getUserName(){
    const users = await getUsers();
    const userNames = users.map(user => user.name);
    return userNames;
}

getUserName().then(names => console.log("Danh sach ten nguoi dung: ", names));