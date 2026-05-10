// Hàm này nhận thông tin đăng nhập từ bên ngoài qua tham số.
// Có thể hiểu tham số như "chỗ chờ sẵn" để nhận dữ liệu khi gọi hàm.
/**
 * Thực hiện mô phỏng thao tác đăng nhập.
 * @param taiKhoan Tên tài khoản được truyền vào khi gọi hàm.
 * @param matKhau Mật khẩu được truyền vào khi gọi hàm.
 */
function dangNhap(taiKhoan, matKhau) {
  // In ra tài khoản đang dùng để đăng nhập.
  console.log(`Đăng nhập user: ${taiKhoan}`);
  // In ra mật khẩu đang dùng để đăng nhập.
  console.log(`Đăng nhập password: ${matKhau}`);
  // Mô phỏng thao tác bấm nút đăng nhập.
  console.log("Click nút login");
}

// In ra tên test case đầu tiên.
console.log("TC01");

// Gọi hàm và truyền dữ liệu thật vào, dữ liệu này gọi là đối số.
dangNhap("adminNeko", "abc");

// In ra tên test case thứ hai.
console.log("TC02");

// Gọi lại hàm với bộ dữ liệu khác.
dangNhap("adminNeko2", "abc2");

/**
 * Tính tổng của hai giá trị.
 * @param a Giá trị thứ nhất.
 * @param b Giá trị thứ hai.
 * @returns Kết quả sau khi cộng a và b.
 */
function tinhTongTien(a, b) {
  // Lưu kết quả phép cộng vào biến result.
  const result = a + b;
  // In kết quả ra màn hình.
  console.log(result);
  // Trả kết quả ra bên ngoài hàm.
  return result;
}

// Gọi hàm, nhận giá trị trả về và gán vào biến tienThanhToan.
let tienThanhToan = tinhTongTien(100, 2);

// In lại giá trị đã nhận được từ hàm.
console.log(tienThanhToan);

// Bên trong function:
// return result -> trả giá trị ra bên ngoài -> tienThanhToan =

/**
 * Trả về một con số may mắn cố định.
 * @returns Số 8.
 */
function laySoMayMan() {
  // Trả về giá trị 8 cho nơi gọi hàm.
  return 8;
}

// Lưu giá trị trả về của hàm vào biến ketQua.
let ketQua = laySoMayMan();

/**
 * Trả về tên hiển thị cố định.
 * @returns Chuỗi "neko".
 */
function layTenHienThi() {
  // Trả về tên hiển thị.
  return "neko";
}

// Lưu tên hiển thị nhận được từ hàm.
let tenHienThiUi = layTenHienThi();

/**
 * Kiểm tra một người có phải người trưởng thành hay không.
 * @param tuoi Tuổi cần kiểm tra.
 * @returns Kết quả đúng hoặc sai dựa trên điều kiện tuổi >= 18.
 */
function laAdult(tuoi) {
  // Nếu tuổi từ 18 trở lên thì trả về true, ngược lại trả về false.
  return tuoi >= 18;
}

// Kiểm tra với tuổi 20.
console.log(laAdult(20));

// Kiểm tra với tuổi 6.
console.log(laAdult(6));

/**
 * Minh họa cách return làm hàm kết thúc ngay lập tức.
 * @returns Chuỗi "Xong".
 */
function demoReturn() {
  // In ra thông báo bắt đầu chạy hàm.
  console.log("Bat dau");
  // Trả kết quả và kết thúc hàm tại đây.
  return "Xong";
  // Dòng này sẽ không được chạy vì hàm đã return trước đó.
  console.log("Dong nay se khong chay");
}

// Gọi hàm và in ra giá trị trả về.
console.log(demoReturn());

// Bài toán
// Viết 1 hàm tên là cleanPrice(rawString).
//
// Yêu cầu
// - Hàm này nhận vào 1 chuỗi giá tiền lấy từ UI.
// - Ví dụ: " Giá: 25.000.000 VND  ".
// - Hàm phải tự động dọn dẹp chuỗi và return về 1 số nguyên kiểu number.
// - Ví dụ kết quả mong muốn là: 25000000.
// - Nếu đầu vào là falsy thì trả về 0 luôn cho an toàn.
//
// Test case
// sp1 = "  Giá: 1.500.000 VND  ";
// sp2 = "   250.000 VND";
// sp3 = "";
//
// Kết quả mong đợi
// 15000000
// 250000
// 0

xinChao();

//tạo hàm sau
function xinChao() {
  console.log("Hoisting");
}

// //hoisting function declaration
// let loginStatus = checkLoginStatus();
// console.log(loginStatus);

// function checkLoginStatus() {
//   return true;
// }

const checkLoginStatus = function () {
  return true;
};

const loginStatus = checkLoginStatus();

console.log(loginStatus);

function tinh(a, b) {
  return a + b;
}

function tinh(a, b) {
  return a * b;
}
console.log(tinh(2, 3));

// const tinh2 = function (a, b) {
//   return a + b;
// };

// const tinh2 = function (a, b) {
//   return a * b;
// };

const utils = {
  lamSach: function (text) {
    return text.trim().toLowerCase();
  },
};

console.log(utils.lamSach("  HELLLO  "));

const moiTruong = "staging";

const layUrl =
  moiTruong === "staging"
    ? function () {
        return "https://staging.neko.vn";
      }
    : function () {
        return "https://neko.vn";
      };

console.log(layUrl());

///
//viết theo kiểu function expression (cũ)

const tinhTongExpression = function (a, b) {
  return a + b;
};

//chuyển sang arrow

const tinhTongArrow = (a, b) => {
  return a + b;
};

//rút gọn nữa

const tinhTongSieuNgan = (a, b) => a + b;

// cách sử dụng thực tế
//câu hỏi là lúc nào dùng loại nào ?????
// viết method bên trong object

const sanPham = {
  ten: "iphone 17",
  gia: 2000000,

  //cách 1: function expression kiểu cổ điển

  hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 2: để viết 1 hàm. method shorthand -> NÊN DÙNG

  hienThiShorthand() {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 3. ko SỬ DỤNG ARROW KHI VIẾT METHOD TRONG OBJECT
  hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
  },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

//Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi. ví dụ 1 object tên cart có dữ liệu item và method getSummary() để mô tả chính nó
const phoneCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

const pcCart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};

//object config: ví dụ object có cấu hình, timeout, baseurrl -> có 1 method buildUrl () để ghép link hoàn chỉnh
//object formatter có các method formatPrice, formatDate() -> objet tiện ích

//ví dụ : 1 object cụ thể, viết nhanh dùng ngay -> method bên trong object là hợp lý (THƯỜNG THỈ TỈ LỆ SỬ DỤNG TRONG AT LÀ ÍT)
// nhưng nếu nhiều object cùng form như cart1, cart2 , cart3 -> cùng CLASS dễ tổ chức hơn

//B. Truyền hàm làm call back.  -> callback là truyền 1 hàm vào chỗ khác để nó đc gọi sau
// -> arrow function là lựa chọn ưu tiên hàng đầu

const giaSanPham = [15000, 20000, 40000];

//declaration
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);

//expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

//Sự thật: là arrow funcion hoàn toàn thay thế function expression ở rất nhiều code base
//cả 2 đều dùng const. và ko có hoisting . nhưgn arrow thì ngắn hơn gấp bội
//function expression chỉ xuất hiện ở 1 số trường hợp
/// code cũ khi arrow chưa ra đời thì người ta dùng nhiều
/// -> KẾT LUẬN> code mới chỉ nhớ 2 loại: declaration và arrow

//nếu khai 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm trước
// function guiThongBao(message) {
//   console.log(`${message}`);
// }

// function guiThongBao(messsage, userId) {
//   console.log(`${messsage}, ${userId}`);
// }

// guiThongBao("deploy xong");

// guiThongBao("deploy xong", 101);

function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(`${message}`);
    return;
  }
  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  console.log(`target ko hợp lệ`);
}

guiThongBao("deployxong");

guiThongBao("deploy xong", 101);

guiThongBao("deploy xong", "101");

//đây là phong cách viết 1 hầm nhiueef cách gọi
//return ở đây gióng như
// "xử lý xong trường hợp này rồi -> thoát hàm luôn"

function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}

//break ở dây chỉ dừng for, ko kết thúc function ngay

function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      return;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}
// gặp 5 là kết thúc luôn cả hàm

timSo([1, 2, 3, 4, 5, 6, 7]);
timSo2([1, 2, 3, 4, 5, 6, 7]);

function dangNhap(user, pass, moiTruong = "staging") {
  console.log(`${moiTruong} Đăng nhập: ${user} - ${pass}`);
}

dangNhap("admin", "123456");

dangNhap("admin", "1234567", "dev");

function taoTestUser(ten, tuoi = 25, email, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko", "neko@vn.com");

taoTestUser("neko2", undefined, "neko2@vn.ciom");

//rest parameters
function tongTien(...danhSachGia) {
  //danhsachgia là 1 mảng
  let tong = 0;
  // [1000, 2000, 3000, 4000]
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));

//hàm nhận vào duy nhát 1 object là options
//c1
function taoUser(options) {
  //bóc tách (destructuring) object ra từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
//c2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

//gọi hàm
taoUser({
  ten: "neko",
  email: "neko@vn.com",
});

taoUser2({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});
