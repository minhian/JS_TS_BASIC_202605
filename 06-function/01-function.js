// taiKhoan và matKhau là tham số 
function tinhTongTien (a,b) {
    const result = a + b;
    console.log(result);
    return result; // trả về kết quả của phép tính, khi gọi hàm sẽ nhận được giá trị này để sử dụng tiếp
}

let tienThanhToan = tinhTongTien(100, 20); // gọi hàm và truyền đối số vào hàm

// trong function:
// return result -> trả giá trị ra bên ngoài -> tienThanhToan sẽ nhận được giá trị này để sử dụng tiếp
// nếu không có return thì hàm sẽ trả về undefined, khi đó tienThanhToan sẽ nhận được giá trị undefined và không thể sử dụng tiếp được

// ví dụ: yêu cầu viết 1 hàm tên là cleanPrice (rawString). Hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
// ví dụ: giá 25.000.000 VND -> Hàm phải tự động dọn dẹp và return về 1 số number nguyên (ví dụ: 25000000) để có thể sử dụng tiếp cho các phép tính khác
// nếu đầu vào là falsy thì trả về 0 luôn cho an toàn 

// test case: 
// sp1 = " Giá 25.000.000 VND ";
// sp2 = " 15.000.000 VND";
// sp3 = "";

function cleanPrice(rawString) {
    if (!rawString) {
        return 0; 
    }
    const cleanNumber = rawString.replace("Giá:","").replace("VND","").replace(".","").trim();
    return Number(cleanNumber);
}
let sp1 = " Giá 25.000.000 VND ";
let sp2 = " 15.000.000 VND";
let sp3 = ""; 

console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

