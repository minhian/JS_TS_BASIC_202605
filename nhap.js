let nutThanhToanIsVisible = false; // Giả lập trạng thái ban đầu
let soLanKiemTra = 0; // Biến đếm số lần đã kiểm tra
const soLanKiemTraToiDa = 10; // Giới hạn để tránh vòng lặp vô hạn

while (!nutThanhToanIsVisible && soLanKiemTra < soLanKiemTraToiDa) {
  console.log(`Lần kiểm tra ${soLanKiemTra + 1}: Nút chưa xuất hiện`);

  // Trong code Playwright thật, bạn có thể kiểm tra trạng thái phần tử ở đây
  // await page.waitForTimeout(1000);
  // nutThanhToanIsVisible = await page.locator("#checkout-button").isVisible();

  if (soLanKiemTra === 4) { // Giả lập rằng nút xuất hiện ở lần kiểm tra thứ 5
    nutThanhToanIsVisible = true; // Giả lập rằng nút xuất hiện ở lần kiểm tra thứ 5
  }

  soLanKiemTra++; // Luôn cập nhật để vòng lặp có cơ hội kết thúc
}

if (nutThanhToanIsVisible) {
  console.log("Nút Thanh toán đã xuất hiện, có thể click");
} else {
  console.log("Đã vượt quá số lần kiểm tra cho phép");
}

console.log('..............................................................');


let cacTrangThaiChoChoPhep = ["Waiting", "Pending", "Approved", "Shipped"];
let trangThaiThucTe = "Approved";

if (cacTrangThaiChoChoPhep.includes(trangThaiThucTe)) {
  console.log('Test passed: Dung logic');
} else {
  console.log('Test fail');
}

console.log('..............................................................');

let gioHangCongNghe = [
  "Bàn phím cơ", 
  "Chuột gaming",
  "Màn hình rời",
  "Tai nghe bluetooth"
];

// 1. In ra tổng số sản phẩm 
let TongSoSanPham = gioHangCongNghe.length;
console.log(TongSoSanPham);

// 2. In ra sản phẩm đầu tiên

let SanPhamDauTien = gioHangCongNghe.shift();
console.log(SanPhamDauTien);

// 3. In ra tên sản phẩm cuối cùng: 
let sanPhamCuoiCung = gioHangCongNghe.pop();
console.log(sanPhamCuoiCung);

// 4. Thêm "lót chuột" vào cuối giỏ hàng 
 gioHangCongNghe.push("lót chuột");
 let gioHangCongNghe2 = gioHangCongNghe;
console.log(gioHangCongNghe2);

console.log('..............................................................');

let config = { browser: "Chrome", timeout: 5000}; 
// không được dùng backstick để in ra trong object vì không thể in ra được 

console.log("giá trị ban đầu",config);

// sửa giá trị timeout 
config.timeout = 10000; 
console.log('sau khi sửa time out', config);

// thêm dữ liệu (gọi tên key chưa tồn tại + giá trị) -> linh hoạt khi sử dụng
config.isHeadless = true; 
console.log('sau khi thêm key mới isHeadless', config); 

// xóa dư liệu (dùng từ khóa delete) 
delete config.browser;
console.log('sau khi xóa browser',config);

console.log('..............................................................');

let sanPhamTiki = { id: "Sp01", Ten: "Ban phim", gia: 50000};

// A. Object.key () -> gom tất cả key thành 1 mảng array

let danhSachKeySanPhamTiki = Object.keys(sanPhamTiki);
console.log(danhSachKeySanPhamTiki);
// sau khi in ra ở trên -> lúc này đã chuyển danhSachKeySanPhamTiki về dạng array mảng rồi -> có thể sử dụng các method của array để truy vấn 
// vi dụ: kiểm tra xem trong object có chứa key "Ten" hay không
console.log(danhSachKeySanPhamTiki.includes("Ten"));

// B. Object.Value() -> gom tất cả các GIÁ TRỊ thành 1 mảng 
let danhSachValue = Object.values(sanPhamTiki);
console.log(danhSachValue);

// C. Object.entries() -> Gom cả nhãn lẫn giá trị 

let danhSachCap = Object.entries(sanPhamTiki);
console.log(danhSachCap);

//D. Object.hasOwn() -> kiểm tra Key có phải của chính nó không? -> Trả ra boolean
console.log(Object.hasOwn(sanPhamTiki, "ID2"));


console.log('..............................................................');

let apiResponse = {
    userId: 1,
    name: "John Doe",
    role: "admin",
    isActive: "YES"
};

console.log(Object.keys(apiResponse));

// dùng object.hasOwn () kiểm tra 3 trường require "userId", "email", "role"

console.log(Object.hasOwn(apiResponse,"userId"));
console.log(Object.hasOwn(apiResponse,"email"));
console.log(Object.hasOwn(apiResponse,"role"));

// kiểm tra giá trị isActive có đúng kiểu boolean không (dùng typeOf) nếu sai kiểu, in ra cảnh báo 
console.log(typeof apiResponse.isActive === Boolean);
if (typeof apiResponse.isActive !== Boolean) {
  console.log('sai kiểu giá trị');
} else 
  console.log('đúng là boolean');

  // Dùng object.values + includes để kiểm tra xem có giá trị nào là "admin" không
let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`Có chứa admin hay không: ${hasAdmin}`);

// check thay đổi khi push git 

  








