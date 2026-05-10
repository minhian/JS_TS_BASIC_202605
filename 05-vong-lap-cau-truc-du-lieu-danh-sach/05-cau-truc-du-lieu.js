//Yếu tố 1:
let soLanClick = 1;

//Yếu tố 2:
while (soLanClick <= 3) {
  //Thực hiện hành động
  console.log(`Đang click lần thứ ${soLanClick}`);

  //Yếu tố 3
  soLanClick++;
}

console.log("Đã click xong 3 lần. thoát vòng lặp");

console.log('.....................................');

// Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lầm. nếu thấy thì dừng. nếu quá 5 lần thì báo lỗi

let maxRetry = 5; //so lan thu toi da
let currentRetry = 1; //Lan thu hien tai
let isFound = false; //Trang thai tim thay nut

while (isFound === false && currentRetry <= maxRetry) {
  console.log(`Đang tìm nút thanh toán trên màn hình ...`);

  //Giả lập tìm kiếm (là cho tỉ lệ tìm kiếm  < 0.8)
    let searchResult = Math.random() > 0.5;

  console.log(`Search result : ${searchResult}`);

  if (searchResult === true) {
    isFound = true; //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
    console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
  } else {
    console.log("Khong thấy, chuẩn bị thử lại");
    currentRetry++; //Tăng số lần thử lên 1 (bước nhảy)
  }
}

//xử lý kết quả

if (isFound === false) {
  console.log(`TEST FAIL, Đã thử 5 lần nhưgn mạng lag quá, ko thấy nút đâu`);
}

console.log('.....................................');


//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule Là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị ĐĂng nhập thành công. Nếu sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

//Yêu cầu:
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)
//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)
//Nếu nhập đúng in ra "Đăng nhập thành công"
//Nếu nhập sai in ra sai mật khẩu 
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa

let matKhauNhap;
let lanThu = 1;
while (lanThu <= maxLanThu) {
    //Giả lập người dùng nhập mật khẩu
    if (lanThu === 1) {
        matKhauNhap = "0000";
    } else if (lanThu === 2) {
        matKhauNhap = "9999";
    } else {
        matKhauNhap = "1234";
    }
console.log(`Lần thử thứ ${lanThu}, người dùng nhập mật khẩu: ${matKhauNhap}`);

    if (matKhauNhap === matKhauDung) {
        console.log("Đăng nhập thành công");
        break; //Thoát vòng lặp nếu đăng nhập thành công
    } else {
        console.log("Sai mật khẩu");
        lanThu++; //Tăng số lần thử lên 1
    }
}

//Kiểm tra sau khi thoát vòng lặp
if (lanThu > maxLanThu) {
    console.log("Tài khoản bị khóa");
}

console.log('.....................................');

// Array - Mảng - Danh sách

let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];
//1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng

console.log(`Tổng số sản phẩm trong giỏ hàng: ${gioHang.length}`);
console.log(`Sản phẩm đầu tiên: ${gioHang[0]}`);
console.log(`Sản phẩm cuối cùng: ${gioHang[gioHang.length - 1]}`);  
gioHang.push("Lót chuột");
console.log(`Giỏ hàng sau khi thêm lót chuột: ${gioHang}`);

console.log('.....................................');

// Object - Đối tượng
let config = { browser: "chrome", setTimeout: 5000 };
// trường hợp không trả ra được khi sử dụng backstick cho object
console.log(`giá trị ban đầu ${config}`); // sẽ In ra [object Object] -> không có giá trị 

console.log("giá trị ban đầu", config); // sẽ in ra giá trị của object

config.setTimeout = 10000; //thay đổi giá trị của trường setTimeout trong object
console.log("giá trị sau khi thay đổi", config); // sẽ in ra giá trị mới của object

// xóa dữ liệu trong object
delete config.browser; //xóa trường browser trong object
console.log("giá trị sau khi xóa trường browser", config); // sẽ in ra object sau khi đã xóa trường browser

console.log('.....................................');

const user = { Name: "Minh Tien" };
// vẫn CRUD được với object dù đã khai báo bằng const, chỉ cấm khi cố gắng gán lại toàn bộ object
user.Name = "Tien Nguyen"; //Cập nhật giá trị của trường Name trong object user
console.log("Giá trị sau khi cập nhật", user); // sẽ in ra giá trị mới của object user

// user = { Name: "New User" }; //Lỗi: Assignment to constant variable. Không thể gán lại toàn bộ object user vì đã khai báo bằng const

console.log('.....................................');

let sanPhamTikTok = {
  ten: "Áo thun TikTok",
  gia: 150000,
  mauSac: "Đen",
  size: "M",
};  

//object.keys() - lấy ra danh sách key của object
let danhSachKeyValue = Object.keys(sanPhamTikTok); //Lấy danh sách key của object sanPhamTikTok
console.log("Danh sách key của sản phẩm TikTok:", danhSachKeyValue); //In ra danh sách key  


// áp dụng khi test api trả về 1 object, muốn lấy ra danh sách key để check xem có đúng như spec hay không, hoặc muốn lấy ra giá trị của 1 trường nào đó trong object để check tiếp.  
// Hiểu rằng: nó đã trả ra mảng danh sách key rồi, nên có thể dùng các phương thức của mảng để thao tác tiếp như includes, forEach, map, filter, reduce... để check tiếp.
console.log(danhSachKeyValue.includes("ten")); //Kiểm tra xem key "ten" có tồn tại trong danh sách key hay không, trả về true hoặc false
console.log(danhSachKeyValue.includes("tuoi")); //Kiểm tra xem key "tuoi" có tồn tại trong danh sách key hay không, trả về true hoặc false


// object.values() - lấy ra danh sách value của object
let danhSachValue = Object.values(sanPhamTikTok); //Lấy danh sách value của object sanPhamTikTok
console.log("Danh sách value của sản phẩm TikTok:", danhSachValue); //In ra danh sách value


// object.entries() - lấy ra danh sách cặp key-value của object
let danhSachEntries = Object.entries(sanPhamTikTok);
console.log("Danh sách cặp key-value của sản phẩm TikTok:", danhSachEntries); //In ra danh sách cặp key-value



console.log(danhSachEntries[0]); //In ra cặp key-value đầu tiên trong danh sách
console.log(danhSachEntries[0][1]); //In ra value của cặp key-value đầu tiên trong danh sách


// object.hasOwnProperty() - kiểm tra xem object có tồn tại trường (key) hay không
console.log(sanPhamTikTok.hasOwnProperty("ten")); //Kiểm tra xem object sanPhamTikTok có tồn tại trường "ten" hay không, trả về true hoặc false
console.log(sanPhamTikTok.hasOwnProperty("tuoi")); //Kiểm tra xem object sanPhamTikTok có tồn tại trường "tuoi" hay không, trả về true hoặc false

console.log('.....................................');

// Bài tập test api
// Giả lập response trả về từ api
let apiResponse = {
    userId: 1,
    name: "John Doe",
    role: "admin",
    isActive: "YES"
};

let danhSachKeyApiTest = Object.keys(apiResponse);
console.log("Danh sách key của API response:", danhSachKeyApiTest);

console.log(apiResponse.hasOwnProperty("userId"));
console.log(apiResponse.hasOwnProperty("email"));
console.log(apiResponse.hasOwnProperty("role")); //Kiểm tra xem key "id" có tồn tại trong danh sách key hay không, trả về true hoặc false

console.log(typeof apiResponse.isActive === "boolean"); //Kiểm tra kiểu dữ liệu của trường isActive có phải là boolean hay không, trả về true hoặc false
// nếu isActive có giá trị false thì in ra "User is inactive", nếu isActive có giá trị true thì in ra "User is active"
if (typeof apiResponse.isActive !== "boolean") {
    console.log("Kiểu dữ liệu của trường isActive không đúng, cần phải là boolean");
} else
  console.log("It's okay, kiểu dữ liệu của trường isActive đúng");

let checkValueExist = Object.values(apiResponse).includes("admin"); //Kiểm tra xem value "admin" có tồn tại trong danh sách value hay không, trả về true hoặc false
console.log(checkValueExist);


console.log('.....................................');

// Array of Object - Mảng đối tượng - Danh sách đối tượng
let danhSachUser= [
    { id: 1, name: "John Doe", role: "admin" },
    { id: 2, name: "Jane Smith", role: "user" },
    { id: 3, name: "Bob Johnson", role: "admin" }
];
console.log(danhSachUser[0]); //In ra user đầu tiên trong danh sách
console.log(danhSachUser[0].name); //In ra tên của user đầu tiên trong danh sách
console.log(danhSachUser[1].name); //In ra tên của user thứ hai trong danh sách
console.log(danhSachUser[2].name); //In ra tên của user thứ ba trong danh sách

console.log('.....................................');

// vòng lặp for - lặp lại có cấu trúc 
