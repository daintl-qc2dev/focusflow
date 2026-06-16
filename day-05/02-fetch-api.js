// Get users
// async function getUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const users = await response.json();

//         console.log("Danh sach users", users);
//     } catch (error) {
//         console.log("Co loi gi do roi", error.message);
//     }
// }

// getUsers();

//Get user by id
async function getUserById(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const user = await response.json();

        return user;

        console.log(`User co id ${id} la: `, user.name);
    } catch (error) {
        console.log("Co loi gi do roi", error.message);
    }
    
}

getUserById(3);

// Display detail user
async function displayUserSummary(id){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const user = await getUserById(id);

        console.log(`Thong tin chi tiet nhan vien id ${id}`);
        console.log("Ho va ten: ", user.name);
        console.log("Email: ", user.email);
        console.log("Cong ty: ", user.company.name);
    } catch (error) {
        console.log("Co loi gi do roi", error.message);
    }
}

displayUserSummary(3);