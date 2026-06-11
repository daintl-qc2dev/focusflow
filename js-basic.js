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

// ==========================================
// BÀI TẬP 2: VIẾT CÁC HÀM CƠ BẢN
// ==========================================

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

console.log(isAdult(26));
console.log(isAdult(15));

// ==========================================
// BÀI TẬP 3: Learn about Conditionals, loops, array basics
// ==========================================
function formatCurrency(amount) {
    // Sử dụng hàm có sẵn của JS để định dạng tiền tệ theo chuẩn VN
    return amount.toLocaleString('vi-VN') + ' đ';
}
console.log(formatCurrency(173468999));

function isValidEmail(email) {
    // Kiểm tra xem email có chứa ký tự '@' và dấu '.' không
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}
console.log(isValidEmail("abc@gmail.com"));
console.log(isValidEmail("abcgmail.com"));

function changeCelsiusToFahrenheit(celsius) {
    // Doi do C sang do F
    return celsius * 1.8 + 32;
}
console.log(changeCelsiusToFahrenheit(36));

function reverseString(str) {
    // Dao chuoi ky tu
    return str.split('').reverse().join('');
}
console.log(reverseString("Nguyen Thi Le Dai")); 

function findMax(arr) {
    // Hàm findMax(arr): Tìm số lớn nhất trong mảng (Dùng vòng lặp)
    if (arr.length === 0) return undefined;
    
    let max = arr[0]; // Giả định số đầu tiên là lớn nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật nếu tìm thấy số lớn hơn
        }
    }
    return max;
}

console.log(findMax([3, 9, 2, 99, 5]));