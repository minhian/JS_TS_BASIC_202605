


//Ứng dụng tron AT
let statusCode = 404;

if (statusCode === 200) {
  console.log("API hoạt động ok");
} else if (statusCode === 400) {
  console.log("Lỗi dữ liệu gửi lên (Bad Request)");
} else if (statusCode === 404) {
  console.log("Không tìm thấy dường dẫn, Not found");
} else {
  //Dành cho tất cả các TH còn lại (VD: 502, 503)
  console.log("Server đang gặp lỗi");
}

console.log('.....................................');


let loginStatus = "locked";
if (loginStatus === "success") {
    console.log("Test pass: login thành công");
} else if (loginStatus === "locked") {
    console.log("Test pass: tài khoản bị khóa");
} else {
    console.log("Test fail: login thất bại");
}


console.log('.....................................');

//mình sẽ trả kết quả result dựa trên score2
let score2 = 95;
let result;

if (score2 >= 90) {
  result = "XS";
} else if (score2 >= 50) {
  result = "ĐẬu";
} else {
  result = "Tèo";
}

console.log(result);

console.log('.....................................');


// Gán text
let isSaving = true;
let buttonText = isSaving ? "Đang lưu..." : "Lưu";
console.log(buttonText);

// chọn config 
let isCI = false;
let reportMode = isCI ? "html" : "list";
console.log(reportMode);

console.log('.....................................');

let failedTests = 2;
let suiteStatus =
  failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
console.log(suiteStatus);

// viết tại code bằng if/else 
let suiteStatus2;
if (failedTests === 0) {
    suiteStatus2 = "PASS";
} else if (failedTests <= 2) {
    suiteStatus2 = "WARNING";
} else {
    suiteStatus2 = "FAIL";
}
console.log(suiteStatus2);

console.log('.....................................');


let age3 = 18;                      // giá trị 18 được coi là true trong ngữ cảnh boolean
if (age3) {
    console.log('điều kiện đúng');
}
console.log(typeof age3);


console.log('.....................................');

//Ví dụ AT
//
//Dữ liệu lấy từ web ("", hoặc 'https://github.com...')
let githubLink = "";

if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
  console.log("User đã upload github link");
} else {
  console.log("Chưa upload");
}

