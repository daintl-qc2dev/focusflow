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

// ==========================================
// 2. Hàm updateUser(id, updateData): Cập nhật thông tin user theo ID (Dùng map)
// ==========================================
function updateUser(id, updateData) {
    users = users.map(user => {
        if (user.id === id) {
            // Nếu tìm thấy ID trùng khớp, gộp dữ liệu cũ với dữ liệu mới cập nhật
            return { ...user, ...updateData };
        }
        return user; // Các user khác giữ nguyên
    });
    return users;
}

console.log("--- 2. Update data user ---");
updateUser(2,{name: "Nguyen Van Hop", age: 16});
console.log(users);

// 3. Hàm getUserEmails(): Lấy ra danh sách chứa TẤT CẢ email của user (Dùng map)
function getUserEmails() {
    // Biến đổi mảng Object thành một mảng chỉ chứa các Email
    return users.map(user => user.email);
}

console.log("\n--- 3. Danh sách tất cả Email ---");
console.log(getUserEmails());

// 4. Hàm getAdultNames(): Lấy danh sách TÊN của các user từ 18 tuổi trở lên 
//    👉 Ứng dụng kỹ thuật Chain (Kết hợp) giữa filter và map
// ==========================================
function getAdultNames() {
    return users
        .filter(user => user.age >= 18)  // Bước 1: Lọc ra các user có age >= 18
        .map(user => user.name);         // Bước 2: Chỉ lấy ra thuộc tính name của họ
}

console.log("\n--- 4. Danh sách nguoi >= 18t ---");
console.log(getAdultNames());