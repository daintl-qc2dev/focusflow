// Kiểu String
const firstName = "Dai";
const lastName = "Nguyen";
let job = "QC Engineer";

// Kiểu Number
let age = 26;
const pi = 3.14;
let score = 10;

// Kiểu Boolean
let isLearningJS = true;
let hasPet = false;

// Kiểu Undefined và Null
let futureProject; // undefined
let currentCar = null; // Hiện tại chưa có xe

// 1. Hàm tính tổng
function add(a, b) {
    return a + b;
}

console.log("Tong 2 so la: ", add(5, 7));

// 2. Hàm lấy tên đầy đủ
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log("Họ và tên là:", getFullName(firstName, lastName));

// 3. Hàm kiểm tra người lớn
function isAdult(age) {
    return age >= 18;
}
