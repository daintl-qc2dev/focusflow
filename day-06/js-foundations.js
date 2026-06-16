
//countdown
function countdown(n){
    for (let i = n; i > 0; i--){
        console.log(i);
    }
}

console.log("Countdown tu 10");
countdown(10);

//sumToN
function sumToN(n){
    let sum = 0;
    for (let i = n; i > 0; i--){
        sum = sum + i;
    }
    console.log(" sumToN(4) la: ",sum);
}

sumToN(4);

//checkGrade
function checkGrade(score){
    if (score >= 9)
        console.log("Xuat sac");
    else if (score >= 8)
        console.log("Gioi");
    else if (score >= 6.5)
        console.log("Kha");
    else if (score >= 5)
        console.log("Trung binh");
    else
        console.log("Yeu");
}
checkGrade(9);

//dayOfWeek
function dayOfWeek(n) {
    switch (n) {
        case 1:
            console.log("Chủ Nhật");
            break;
        case 2:
            console.log("Thứ Hai");
            break;
        case 3:
            console.log("Thứ Ba");
            break;
        case 4:
            console.log("Thứ Tư");
            break;
        case 5:
            console.log("Thứ Năm");
            break;
        case 6:
            console.log("Thứ Sáu");
            break;
        case 7:
            console.log("Thứ Bảy");
            break;
        default:
            console.log("Số không hợp lệ! Vui lòng nhập từ 1 đến 7.");
    }
}

console.log("Test dayOfWeek");
dayOfWeek(2);
dayOfWeek(8);