Kiểu dữ liệu: Data types
nhóm kiểu dữ liệu nguyên thủy (primitive types)

1. string (chuỗi ký tự)
    - sẽ bao bọc qua dấu nháy đơn hoặc dấu nháy kép 
    - hoặc dấu backstick ``
nếu chuỗi bình thường mà không cần nhúng biến thì dùng '...'  ".." đều được 

dùng chuỗi có dấu ' bên trong nếu bên trong có dấu "" 
dùng chuỗi có dấu "" nếu bên trong có dấu nhảy đơn ''
nhúng biến thì dùng backstick ${tên biến}

sẽ có những extension để format code cho đẹp ví dụ như là: prettier / eslint 

2. Number (số)
Nó không phân biệt số nguyên (10) hay số thập phân (3.14) => tất cả đều gọi chung là number 
quy tắc đóng gói number: viết trần ko bao quanh bởi cái gì cả. 

3. Boolean (True / False): 
Chỉ có 2 trạng thái Đúng vs Sai 
Quy tắc đóng gói: viết trần không bao quanh bởi cái gì 

------------------------------------------------------------------------------------------------------------------------------------


Hộp đồ nghề xử lý string: 

1. length - dùng để đếm chuỗi xem có bao nhiêu ký tự và tính cả dấu cách 
cú pháp: tenBien.length (lưu ý: KHÔNG có dấu ngoặc () vì đây là thuộc tính, ko phải method)

2. trim () - cắt tỉa và làm sạch khoảng trắng ở 2 đầu 

ví dụ: "     admin@example.com   " 
cú pháp: tenBien.trim() 

3. toUpperCase() và toLowerCase() - Dùng để biến tất cả thành chữ HOA hoặc chữ thường
cú pháp: tenBien.toUpperCase() vs tenBien.toLowerCase() 

Ví dụ: IPHoNE 15 - data test lại là iphone 15
-> giải pháp: chuyển cả 2 về cùng 1 kiểu (thường là lowercase) rồi mới so sánh

4. includes() - kính lúp tìm kiếm: 
Kiểm tra xem 1 chuỗi con có nằm trong chuỗi mẹ hay không
kết quả: trả về TRUE  hoặc FALSE
QUY TẮC ĐẶC BIỆT: phân biệt HOA thường (case sensitive). Include so khớp chính xác từng ký tự bao gồm cả chữ HOA và chữ thường. CÓ check cả khoảng trắng

5. Replace - xóa và sửa lỗi
có đặc điểm là: mặc định nó chỉ thay thế CHỖ ĐẦU TIÊN nó tìm thấy 
cú pháp: tenBien.replace("cu", "moi")
Quy tắc: cũng phân biệt hoa thường

replaceAll
có đặc điểm là: mặc định nó thay thế tất cả các ký tự nó tìm thấy 

6. indexOf() - dò vị trí, tìm vị trí 
Tìm vị trí đầu tiên của 1 chuỗi con bên trong chuỗi mẹ. Nếu ko tìm thấy trả về -1
cú pháp: chuoime.indexOf("Chuoi con")
Kết quả: trả về số (vị trí bắt đầu tính từ 0)

Trong js có 2 cách cắt chuỗi: 
    - subString()
    - Slice ()
    -> Cắt lấy một phần của chuỗi đưa trên vị trí bắt đầu và vị trí kết thúc 

Điểm cực kỳ quan trọng: 
Start: được tính vào 
End: không được tính vào 

let text = "ABCDEFG" 

text.slice(1,4) -> bắt đầu từ 0, start được tính vào và end ko được tính vào -> console.log sẽ trả ra BCD 

cú pháp: chuoi.substring(batdau, kethuc) :cắt từ bắt đầu đến trước kết thúc 
        chuoi.slide (batdau,kethuc) - cắt tương tự nhưng hỗ trợ số âm

let maDon = "ORD-2026-00567" 
substring (4,8) -> 2026 

let fileName = "report_2026.pdf" 
fileName.slide(-4) -> số âm thì tính từ bên phải sang

=> MUỐN LẤY ĐUÔI CHUỖI, ĐUÔI FILE THÌ DÙNG SLIDE 
cắt đơn giản từ trái qua phải thì dùng cái nào cũng được 

Nếu truyền vào không có end() thì nó sẽ lấy từ vị trí đó đến hết chuỗi 

Tư duy kết hợp nhiều string method: 
HÃY TƯ DUY THEO QUY TRÌNH 
1. Dữ liệu có bẩn hay không: -> dùng trim(), replace(), replaceAll(), toLowerCase()
2. Mình có cần biết sự tồn tại hay không -> dùng includes()
3. Mốc bắt đầu nằm ở đâu: indexOf()
4. sau khi biết vị trí rồi, cần cắt đoạn nào: slide, substring()
5. kết quả cuối cùng có cần chuẩn hóa nữa không?? sử dụng trim(), toLowerCase(), split()

Flow: LÀM SẠCH -> TÌM MỐC -> CẮT/TÁCH -> CHUẨN HÓA -> KIỂM TRA 

------------------------------------------------------------------------------------------------------------------------------------

Hộp đồ nghề xử lý NUMBER: 

1. Ép kiểu: 
để tính toán bắt buộc phải chuyển về number 
A. Number() 
nó cố gắng biến toàn bộ chuỗi thành số. Nếu chuỗi có chứa dù chỉ 1 ký tự lạ -> báo lỗi NaN (Not a Number) 

B. parseInt() -> máy lọc số nguyên 
Nó đọc từ t rái sang phải, gặp số thì lấy, gặp chữ thì stop và bỏ qua phần thập phân 

C. parseFloat() -> máy lọc số thập phân 
-> giống parseInt nhưng giữ lại phần thập phân

1 số phương thức làm việc với Number
    - toFixed() - chốt số thập phân ()
    giữ lại n số sau dấu phẩy 

    cú pháp: so.toFixed(số lẻ muốn lấy) -> TỰ ĐỘNG LÀM TRÒN -> nhìn vào chữ số ngay sau vị trí bạn muốn giữ 

>=5 -> làm tròn lên 
< 5 -> làm tròn xuống 
Thiếu thì thêm số 0 (ví dụ 19.9.toFixed(2) -> thì sẽ trả ra 19.90 )

Đối tượng toán học (Math object) 

Làm tròn nguyên
Math.round(): làm tròn theo quy tắc toán học ()
Math.celi(): làm tròn lên trần nhà. luôn tăng ví dụ 4.1 -> 5 
Math.floor() : làm tròn xuống ví dụ 4.9 -> 4 

Tạo số ngẫu nhiên 
Math.random() -> trả về 1 số lẻ từ 0 -> sát 1 (ví dụ: 0,11123 hoặc 0,999999) 

Tạo số ngẫu nhiên từ min -> max 
Math.floor(Math.random() * (max - min +1)) + min 
Phân tích công thức này: 
  B1.math.random() -> trả ra số từ 0 -> sát 1: ví dụ: 0.9999
  B2 max- min + 1 = 55 - 50 + 1 = 6 -> Tổng số kết quả khác nhau có thể có 
  B3 Math.random() * 6 -> từ 0 -> 5.9999999 => kéo giãn khoảng ra 6 đơn vị 
  B4 Math.floor () 0,1,2,3,4,5 -> làm tròn xuống ra 6 số nguyên từ 0-5 
  B5 + min dịch chuyển lên vị trí min -> 50, 51,52,53,54,55 

.padStart lấp đầy chỗ trống phía trước 
Hàm này dùng để chèn thêm ký tự vào đầu chuỗi cho đến khi chuỗi đó đạt đủ độ dài mong muốn 
Lưu ý: padStart LÀ PHƯƠNG THỨC CỦA STRING() -> KHÔNG phải Number. muốn dùng thì phải ép kiểu số sang chuỗi trước 

Cú pháp: chuoi.padStart(độ dài mong muốn, ký tự chèn) -> độ dài ở đây là độ dài tổng bao gồm cả đệm

TỔNG KẾT: 
Nhớ hàm: 
-> đầu vào hiện tại là text hay number: Nếu là text -> phải nghĩ tới ép kiểu 
-> cần ép kiểu nghiêm khắc hay linh hoạt -> number, parseInt, parseFloat() 
-> Sau khi thành số rồi => cần tính gì -> cộng trừ nhân chia min max 
-> có cần làm tròn ko? 
-> có cần hiển thị đẹp không -> to fixed, padStart, padEnd(0)

Method chaining là gì? nối liên tiếp các method, đầu ra của method trước sẽ là đầu vào của method sau => PHẢI CÙNG 1 KIỂU GIÁ TRỊ 
có 1 chuỗi slug = " Playwright Basic First test" 
-> 

ToLocaleString()
 -> hiển thị số này theo thói quen của 1 quốc gia/ngôn ngữ cụ thể 
 Ví dụ: cùng một số 54M -> VN sẽ là: 54.000.000 -> Mỹ là 54,000,000

 Cú pháp: số.toLocaleString(Locale,options)



