let loiChao = "xin chao buoi sang";
let loiChao2 = 'xin chao buoi sang';
let myName = "Minh Tien";

const tenHocVien = "Minh Tien";
// dùng backstick nhúng biến tên học viên vào giữa câu hoặc 1 chuỗi khác 

const loiGioiThieu = `Tên tôi là ${tenHocVien}`;
console.log(loiGioiThieu);

const chaoBuoiSang = `Chào buổi sáng ${myName}`;
console.log(chaoBuoiSang);

let matKhau = "123456";                                 // length
console.log(matKhau.length);

let emailWeb = "   minhtiendo111@gmail.com.vn      "     // trim()

let emailStandard = emailWeb.trim();
console.log(emailStandard);
console.log(emailStandard.length);
                                                        // toUpperCase() và toLowerCase()

let tenSanPham = "iPhONE 14 PrO Max";
console.log(tenSanPham.toLowerCase());


                                                    // includes 
let thongBao = "Đăng nhập thất bại. Sai mật khẩu";
console.log(thongBao.includes("thất bại"));      //include sẽ check phân biệt HOA thường, nếu viết hoa THẤT BẠI thì sẽ trả về false, nếu viết thường thất bại thì sẽ trả về true
console.log(thongBao.includes("THẤT BẠI"));
 //ví dụ nhập sai mk và BE trả về cho FE, FE sẽ dùng includes để check xem trong thông báo có chứa từ "thất bại" hay không, nếu có thì sẽ hiện thông báo lỗi cho người dùng

 console.log(thongBao.toLowerCase().includes("thất bại")); // cách này sẽ bỏ qua việc phân biệt hoa thường vì đã chuyển nó về viết thường, dù có viết THẤT BẠI hay thất bại thì cũng sẽ trả về true


 // ví dụ về include check cả khoảng trắng và trả về cả 2 đều true: 
    let thongBao2 = "xin chao ban";
    console.log(thongBao2.includes("chao ban")); // trả về true
    console.log(thongBao2.includes(" chao ban")); // cũng trả về true vì trong chuỗi thongBao2 có chứa " chao ban" (có khoảng trắng ở đầu) nên cũng sẽ trả về true, nếu viết "chao ban " (có khoảng trắng ở cuối) thì sẽ trả về false vì trong chuỗi thongBao2 không có "chao ban " (có khoảng trắng ở cuối) mà chỉ có "chao ban" (không có khoảng trắng ở cuối) nên sẽ trả về false
    console.log(thongBao2.includes(" chao")); // trả về true vì trong chuỗi thongBao2 có chứa " chao" (có khoảng trắng ở đầu) nên cũng sẽ trả về true, nếu viết "chao " (có khoảng trắng ở cuối) thì sẽ trả về false vì trong chuỗi thongBao2 không có "chao " (có khoảng trắng ở cuối) mà chỉ có "chao" (không có khoảng trắng ở cuối) nên sẽ trả về false
    console.log(thongBao2.includes(" xin ")); // trả về false vì trong chuỗi thongBao2 không có "chao " (có khoảng trắng ở cuối) mà chỉ có "chao" (không có khoảng trắng ở cuối) nên sẽ trả về false

    // replace() dùng để thay thế 1 phần của chuỗi bằng 1 chuỗi khác, nó sẽ trả về 1 chuỗi mới sau khi đã thay thế, còn chuỗi ban đầu sẽ không bị thay đổi
let giaTien = "100.000.000$";
let giaTienSo = giaTien.replace("$", "");
console.log(giaTienSo); // trả về "100" sau khi đã thay thế "$" bằng "" (chuỗi rỗng)

console.log(giaTien.replaceAll(".", "")); // trả về "100000$" sau khi đã thay thế tất cả các "." bằng "" (chuỗi rỗng)

let tenUser = "   Minh Tien   ";
console.log(tenUser.replaceAll(" ", "")); // trả về "MinhTien" sau khi đã thay thế tất cả các khoảng trắng bằng "" (chuỗi rỗng)

// indexOf() dùng để tìm vị trí của 1 chuỗi con trong chuỗi cha, nó sẽ trả về vị trí đầu tiên của chuỗi con trong chuỗi cha, nếu không tìm thấy thì sẽ trả về -1

let urlUI ="https://www.facebook.com/minhtien";
console.log(urlUI.indexOf("facebook")); // trả về 12 vì trong chuỗi urlUI, chuỗi con "facebook" bắt đầu từ vị trí thứ 12 (đếm từ 0)

// kết hợp với substring() để cắt chuỗi con từ chuỗi cha dựa trên vị trí tìm được bằng indexOf()

let fileName = "report_2026.pdf";
console.log(fileName.substring(fileName.length - 4)); // trả về "pdf" vì substring(fileName.length - 4) sẽ cắt 4 ký tự cuối cùng của chuỗi fileName, tương đương với substring(fileName.length - 4, fileName.length) nên sẽ trả về "pdf"
console.log(fileName.slice(-4)); // trả về "pdf" vì slice(-4) sẽ cắt 4 ký tự cuối cùng của chuỗi fileName, tương đương với slice(fileName.length - 4) nên sẽ trả về "pdf"

let errorMsg = "Error 404: Not Found";
console.log(errorMsg.substring(11,20));

console.log(errorMsg.substring(errorMsg.indexOf(":"))); 

console.log(errorMsg.substring(errorMsg.indexOf(":") + 2)); // trả về "Not Found" vì indexOf(":") sẽ trả về vị trí của dấu ":" trong chuỗi errorMsg, sau đó cộng thêm 2 để bỏ qua dấu ":" và khoảng trắng sau dấu ":" nên sẽ trả về "Not Found"


let so1 = "100";
console.log(Number(so1)); // trả về 100 dưới dạng số nguyên sau khi đã chuyển đổi từ chuỗi "100" sang số bằng hàm Number()

let s1 = "100px" 
console.log(Number(s1)); // trả về NaN (Not a Number) vì chuỗi "100px" không thể chuyển đổi hoàn toàn thành một số hợp lệ do có chứa ký tự "px" nên hàm Number() sẽ trả về NaN để biểu thị rằng kết quả không phải là một số hợp lệ
console.log(Number(s1.slice(0,3))); // trả về 100 vì slice(0,3) sẽ cắt 3 ký tự đầu tiên của chuỗi "100px" nên sẽ trả về "100", sau đó hàm Number() sẽ chuyển đổi chuỗi "100" sang số nguyên 100 nên sẽ trả về 100
// hoặc sử dụng parseInt() để chuyển đổi chuỗi "100px" sang số nguyên 100, parseInt() sẽ tự động bỏ qua phần "px" và chỉ lấy phần số ở đầu chuỗi để chuyển đổi, nên sẽ trả về 100
console.log(parseInt(s1));   // trả về 100 vì parseInt() sẽ tự động bỏ qua phần "px" và chỉ lấy phần số ở đầu chuỗi "100px" để chuyển đổi sang số nguyên, nên sẽ trả về 100

let canNang = "70.5kg";
console.log(parseFloat(canNang)); // trả về 70.5 vì parseFloat() sẽ tự động bỏ qua phần "kg" và chỉ lấy phần số ở đầu chuỗi "70.5kg" để chuyển đổi sang số thực, nên sẽ trả về 70.5

console.log((19.9567).toFixed(2)); // trả về "19.96" vì toFixed(2) sẽ làm tròn số 19.9567 đến 2 chữ số thập phân, nên sẽ trả về "19.96" dưới dạng chuỗi  
console.log((19.9567).toFixed(1)); // trả về "19.9" vì toFixed(1) sẽ làm tròn số 19.9567 đến 1 chữ số thập phân, nên sẽ trả về "19.9" dưới dạng chuỗi  

// min max 
console.log(Math.max(5, 10, 15)); // trả về 15 vì Math.max() sẽ trả về giá trị lớn nhất trong các số được truyền vào, nên sẽ trả về 15
console.log(Math.min(3, 10, 15)); // trả về 5 vì Math.min() sẽ trả về giá trị nhỏ nhất trong các số được truyền vào, nên sẽ trả về 5   

// abs trị tuyệt đối
console.log(Math.abs(-10)); // trả về 10 vì Math.abs() sẽ trả về giá trị tuyệt đối của số được truyền vào, nên sẽ trả về 10

// padStart() và padEnd() dùng để thêm ký tự vào đầu hoặc cuối của chuỗi cho đến khi đạt được độ dài mong muốn
let ngay = 5;
let ngayMoi = String(ngay);
let ngayDep = ngayMoi.padStart(2, "0");
console.log(ngayDep); // trả về "05" vì sau khi đã chuyển số 5 thành chuỗi "5" thì padStart(2, "0") sẽ thêm ký tự "0" vào đầu của chuỗi "5" cho đến khi đạt được độ dài 2, nên sẽ trả về "05"

let orderNumber = 5; 
let orderNumberStr = String(orderNumber);
let orderNumberFormatted = orderNumberStr.padStart(4, "0");
console.log(`SP-${orderNumberFormatted}`); // trả về "SP-0005" vì sau khi đã chuyển số 5 thành chuỗi "5" thì padStart(4, "0") sẽ thêm ký tự "0" vào đầu của chuỗi "5" cho đến khi đạt được độ dài 4, nên sẽ trả về "0005", sau đó kết hợp với chuỗi "SP-" để tạo thành chuỗi hoàn chỉnh "SP-0005"

let sanPham = "iphone 15 ";
let gia = "15.000.000";
console.log(sanPham.padEnd(30, "Pro max.............") + gia); // trả về "iphone 15 Pro max15.000.000" vì padEnd(30, "Pro max.............") sẽ thêm chuỗi "Pro max............." vào cuối của chuỗi "iphone 15 " cho đến khi đạt được độ dài 30, nên sẽ trả về "iphone 15 Pro max.............", sau đó kết hợp với chuỗi giá để tạo thành chuỗi hoàn chỉnh "iphone 15 Pro max.............15.000.000"

// cộng chuỗi cách 1: sử dụng dấu cộng (+) để kết hợp các phần của chuỗi lại với nhau, khi sử dụng dấu cộng để kết hợp các phần của chuỗi thì sẽ trả về một chuỗi mới được tạo thành từ việc kết hợp các phần của chuỗi lại với nhau, nên sẽ trả về "Tên: Minh Tien, Tuổi: 30" khi kết hợp userName và age vào trong câu chào
let userName = "Minh Tien";

let age = 30;
console.log('Tên:' + userName + ', Tuổi: ' + age); // trả về "Tên: Minh Tien, Tuổi: 30" vì sử dụng phép cộng chuỗi để kết hợp các phần của chuỗi lại với nhau, nên sẽ trả về "Tên: Minh Tien, Tuổi: 30"//

// hoặc sử dụng dấu phẩy, không sử dụng dấu cộng -> Cách 2 
console.log('tên:', userName, ', tuổi:', age); // trả về "tên: Minh Tien , tuổi: 30" vì khi sử dụng dấu phẩy để phân tách các phần của chuỗi thì console.log sẽ tự động thêm khoảng trắng giữa các phần, nên sẽ trả về "tên: Minh Tien , tuổi: 30" với khoảng trắng sau dấu phẩy

// sử dụng `` để nhúng biến vào trong chuỗi -> Cách 3 sử dụng backstick
console.log(`Tên: ${userName}, Tuổi: ${age}`); // trả về "Tên: Minh Tien, Tuổi: 30" vì sử dụng backtick để nhúng biến vào trong chuỗi, nên sẽ trả về "Tên: Minh Tien, Tuổi: 30" khi kết hợp userName và age vào trong câu chào

let amount = 9.5; 
let display = amount.toFixed(2).padStart(6, "0");
console.log(display); // trả về "09.50" vì hàm String() sẽ chuyển đổi số 9.5 sang chuỗi "9.5", rồi sử dụng padStart(6, "0") để thêm ký tự "0" vào đầu chuỗi cho đến khi đạt được độ dài 6, nên sẽ trả về "09.50" dưới dạng chuỗi

let price = 54000000;
console.log(price.toLocaleString("vi-VN") + " VND"); // trả về "54.000.000 VND" vì toLocaleString("vi-VN") sẽ định dạng số theo kiểu của Việt Nam, nên sẽ trả về "54.000.000" dưới dạng chuỗi, sau đó kết hợp với chuỗi " VND" để tạo thành chuỗi hoàn chỉnh "54.000.000 VND"
console.log(price.toLocaleString("en-US", {style: "currency", currency: "USD"})); // trả về "$54,000,000.00" vì toLocaleString("en-US", {style: "currency", currency: "USD"}) sẽ định dạng số theo kiểu của Mỹ và hiển thị đơn vị tiền tệ là USD, nên sẽ trả về "$54,000,000.00" dưới dạng chuỗi

let finalPrice = "54000000";
console.log(finalPrice.slice(0, 2) + "." + finalPrice.slice(2, 5) + "." + finalPrice.slice(5) + " VND"); // trả về "54.000.000 VND" vì slice(0, 2) sẽ cắt 2 ký tự đầu tiên của chuỗi "54000000" nên sẽ trả về "54", slice(2, 5) sẽ cắt 3 ký tự tiếp theo của chuỗi "54000000" nên sẽ trả về "000", slice(5) sẽ cắt tất cả các ký tự còn lại của chuỗi "54000000" nên sẽ trả về "000", sau đó kết hợp các phần đã cắt với dấu "." và chuỗi " VND" để tạo thành chuỗi hoàn chỉnh "54.000.000 VND'");
