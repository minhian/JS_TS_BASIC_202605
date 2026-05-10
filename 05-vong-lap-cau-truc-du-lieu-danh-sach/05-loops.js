
// for cổ điển
for (let i = 1; i <= 5; i++) {
    console.log(`Lần thử thứ ${i}`);
}


console.log('.....................................');


// Những lỗi kinh điển hay gặp
let arr = ["A", "B", "C"];
console.log(`Độ dài của mảng ${arr.length}`);
console.log(`Tại vị trí 3 ${arr[3]}`);

//in ra console log. 3 phần tử trong mảng
// lưu ý: lấy đúng độ dài của mảng để làm điều kiện dừng cho vòng lặp, không được lấy số cố định (VD: 3) vì nếu mảng thay đổi độ dài thì sẽ bị lỗi
// không được lấy <= vì sẽ bị lỗi out of index, phải lấy < để lấy đúng phần tử cuối cùng của mảng 
// biến i chỉ tồn tại trong dấu ngoặc nhọn của vòng lặp, nên không thể console log i ở bên ngoài vòng lặp được
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('.....................................');
let soLuongDon = 5; 
// 1. Dùng for cổ điển lặp từ 1 >5 
// mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2, ... ORDER-5
// in từng mã đơn hàng ra console log

for (let i = 1; i <= soLuongDon; i++) {
    let maDonHang = `ORDER-${i}`;
    console.log(maDonHang);
}
// tại sao cho i = 1 mà không phải i = 0? vì mình muốn mã đơn hàng bắt đầu từ 1, nếu i = 0 thì sẽ tạo ra mã đơn hàng ORDER-0, không đúng với yêu cầu đề bài
// tại sao có < = mà không phải < ? vì mình muốn lặp đến số 5, nếu i < 5 thì sẽ chỉ lặp đến số 4, không đúng với yêu cầu đề bài


// vòng lặp for of - dùng để duyệt qua các phần tử của mảng, không cần quan tâm đến chỉ số của phần tử

let fruits = ["Táo", "Cam", "Chuối"];

// cach 1: dùng for cổ điển
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// cách 2: dùng for of
for (let fruit of fruits) {
    console.log(fruit);
}
// các cách dùng thường gặp:
// duyệt array đơn giản để in ra từng phần tử
// duyệt string

let mauKhau = "Aa@123";
for (let kyTu of mauKhau) {
    console.log(kyTu);
}

// duyệt array of object
let danhSachSP = [
    { ten: "Áo thun", gia: 200000 },
    { ten: "Quần jean", gia: 500000 },
    { ten: "Giày thể thao", gia: 1000000 },
];
for (let sanPham of danhSachSP) {
    console.log(`Tên sản phẩm: ${sanPham.ten}, Giá: ${sanPham.gia}`);
}
// chú ý: nên khai báo biến là số ít khi duyệt array of object để dễ hiểu, không nên khai báo biến là số nhiều vì sẽ gây nhầm lẫn với tên của array gốc
// ví dụ: array là danh sách sản phẩm -> tên biến khi duyệt nên là sanPham, không nên là sanPhams hay sanPhamList


// trường hợp object có thuộc tính key và value, muốn in ra cả key và value thì có thể dùng for of kết hợp với Object.entries để lấy ra cả key và value của object
// duyệt object - dùng for of kết hợp với Object.entries để lấy ra cả key và value của object
let config = { browser: "chrome", setTimeout: 5000 };
// for cổ điển không duyệt được object, mà nó phải khai báo riêng thành 2 biến key và value rồi in ra console log ghép lại với nhau

for (let cap of Object.entries(config))  { // sử dụng entries để lấy ra cả key và value của object, trả về một mảng gồm các cặp [key, value]
    console.log(`${cap[0]} - ${cap[1]}`); // in ra key và value
}

// vòng lặp for in  dùng riêng cho object - duyệt qua các key của object
for (let key in config) { // duyệt qua các key của object config, trả về key
    console.log(`${key} - ${config[key]}`); // in ra key và value của object config, sử dụng cú pháp config[key] để lấy ra value tương ứng với key
}

// dùng vòng lặp nào cho array và object: 
// while: không biết trước số lần lặp -> lặp đến khi điều kiện sai 
// for cổ điền : biết trước số lần lặp -> lặp đến khi i đạt đến giá trị cuối cùng (biến đếm i)
// có array, chỉ cần giá trị -> for of
// có array, cần cả index -> for cổ điển 
// duyệt object ... -> dùng for of + biến key hoặc for in

// ví dụ: 
let products = [
    { ten: "iphone", gia: 20000000 },
    { ten: "samsung", gia: 15000000 },
    { ten: "xiaomi", gia: 10000000 },
];

// yêu cầu: sử dụng for of và for in để in ra tên và giá của từng sản phẩm trong mảng products
// mỗi lần lặp cần có dấu --- phân cách để dễ nhìn
for (let product of products) {
    for (let key in product) {
        console.log(`${key}: ${product[key]}`);
    }
    console.log('---');
}

console.log('.....................................');

// break - dùng để thoát khỏi vòng lặp khi gặp điều kiện nào đó, không thực hiện các vòng lặp tiếp theo
// từ 1-100 tìm số chia hết cho 7 đầu tiên
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`tim thay so: ${i}`);
    break; // thoát khỏi vòng lặp khi tìm thấy số chia hết cho 7 đầu tiên
  }
}
console.log('.....................................');

let banHang = [
    { ten: "iphone", conHang: true },
    { ten: "samsung", conHang: false },
    { ten: "xiaomi", conHang: true },
];

// tìm sản phẩm hết hàng đầu tiên trong mảng banHang, in ra tên sản phẩm đó và thoát khỏi vòng lặp
for (let sanPham of banHang) {
    if (!sanPham.conHang) { // ! là gì ? là phủ định, nghĩa là nếu conHang là false thì sẽ trả về true, ngược lại nếu conHang là true thì sẽ trả về false
        console.log(`Sản phẩm hết hàng: ${sanPham.ten}`);
        break; // thoát khỏi vòng lặp khi tìm thấy sản phẩm hết hàng đầu tiên
    }
}

// continue - dùng để bỏ qua vòng lặp hiện tại khi gặp điều kiện nào đó, và tiếp tục với vòng lặp tiếp theo
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // bỏ qua vòng lặp hiện tại khi i là số chẵn, và tiếp tục với vòng lặp tiếp theo
    }
    console.log(i); // in ra số lẻ từ 1 đến 10
}

console.log('.....................................');

let userInfor = {
    name: "Nguyen Van A",
    age: 30,
    email: "nguyenvana@example.com",
    password: "abcd@123",
    role: "admin",
};
let hiddenFields = ["password"];
// dùng include trong array để bỏ qua field nhạy cảm dựa trên array hiddenFields
for (let key in userInfor) {
    if (hiddenFields.includes(key)) { // nếu key nằm trong mảng hiddenFields thì sẽ bỏ qua vòng lặp hiện tại và tiếp tục với vòng lặp tiếp theo
        continue;
    }
    console.log(`${key}: ${userInfor[key]}`); // in ra key và value của userInfor, sử dụng cú pháp userInfor[key] để lấy ra value tương ứng với key
}
