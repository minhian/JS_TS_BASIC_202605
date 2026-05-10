let passwordLength = 5; 

let isValid = passwordLength >= 8;
console.log(isValid);   

let giaUI = "50000";
let giaSP = 45000;
console.log(giaUI === giaSP);

let userAge = 20;
let passwordInput = "Netflix123";
let isTermAccepted = true;

// 1. tạo biến isAdult để kiểm tra xem user có đủ 18 tuổi không
let isAdult = userAge >= 18;
console.log(isAdult );
// 2. tạo biến isPasswordValid để kiểm tra xem password có đúng 8  ký tự không
let isPasswordValid = passwordInput.length === 8;
console.log(isPasswordValid);
// 3. tạo biến canRegister để kiểm tra xem user có thể đăng ký không (đủ tuổi, mật khẩu hợp lệ và đã chấp nhận điều khoản)
let canRegister = isAdult && isPasswordValid && isTermAccepted;
console.log(canRegister);


// postfix
let a = 5;
let ketQua1 = a++; 
console.log(ketQua1);
console.log(a);


// / Bài tập
//mình có 1 promotion -> Rule: Nếu KH > 18 tuổi và là thành viên VIP, thì đc giảm 30% giá vé. ngc lại vẫn giữ nguyên
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";
//yêu cầu
// 1. làm sạch và ép kiểu
// 2. kiểm tra điều kiện. Nếu đủ tính giá sau giảm 30% -> nếu ko giữ nguyên
// 3. in kết quả
