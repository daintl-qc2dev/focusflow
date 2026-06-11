let users = [
    { id: 1, name: "Nguyen Van Hai", email: "a@gmail.com", age: 25 },
    { id: 2, name: "Tran Thi Be", email: "b@yahoo.com", age: 16 },
    { id: 3, name: "Nguyen Thi Le Dai", email: "c@dgw.com", age: 30 }
];

// ==========================================
// 1. Hàm createUser(newUser): Thêm user mới vào mảng (Dùng Spread Operator)
// ==========================================
function createUser(newUser) {
    // Sao chép mảng cũ và thêm user mới vào cuối mảng
    users = [...users, newUser]; 
    return users;
}

console.log("--- 1. Sao chep va them user moi ---");
createUser({ id: 4, name: "Bui Tram Anh", email: "c@dgw.com", age: 37 });
console.log(users);