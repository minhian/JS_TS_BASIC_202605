Toán tử (Operator)
phép cộng + :
có tính lưỡng cực nên nguy hiểm, chú ý ép kiểu 

ví dụ: 
10 + 5 = 15 
NHƯNG "10" +5 = 105 vì 10 đang là dạng string 

Phép trù (-):
Javascript luôn cố gắng ép kiểu chuỗi thành số khi gặp dấu (-)
ví dụ: "10" - 5 = 5 -> vì javascript đã ép kiểu string thành number 
Nếu không ép được kiểu thì sẽ trả về NaN (ví dụ: "Mười" - 5 = NaN)

Phép nhân và chia tương tự với phép trừ, Js sẽ ép kiểu số cho các phép tính này 
phép chia: / 
phép chia lấy dư: % 
ví dụ: 10%3 = 1 (10 chia 3 được 3 dư 1 -> kqua = 1)
10%2 = 0 vì dư 0 
-> phép chia lấy dư dùng để check số là lẻ hay chẵn 

Toán tử gán: 
dùng dấu bằng =: quy tắc từ phải sang trái 

toán tử gán rút gọn: 
hay gặp case x = x + 5; 
= -> x = 10 
x - = 5 -> x = x -5 
x * = 5 -> x = x * 5 

Toán tử so sánh: 
> 
<
>= 
<= 

Bằng nhau == với bằng nhau tuyệt đối ===
Toán tử == là phép toán so sánh lỏng lẻo, nó chỉ quan tâm giá trị chứ KHÔNG quan tâm kiểu dữ liệu 

phép so sánh phải ĐỒNG NHẤT VỀ CÙNG 1 KIỂU DỮ LIỆU để so sánh 

Toán tử Logic: 
Phép VÀ: (&&) - logic AND
    Quy tắc: chỉ trả về True khi tất cả các điều kiện là True, 1 cái False sẽ là False 

phép HOẶC: (||) logic - hoặc 
    Quy tắc: chỉ trả về True khi ít nhất 1 điều kiện True, chỉ trả False khi tất cả các điều kiện là False 

phép phủ định: (!) - logic NOT: 
    Quy tắc: Đảo ngược giá trị Boolean, từ True -> False và ngược lại 

Cách đọc toán tử ! cho đúng: 
3 cách đọc quen thuộc: 
Không 
Không phải 
Phủ định của

Ví dụ: 
spin loading -> check xem có quay tròn hay không
!isLoading -> đọc là KHÔNG loading / KHÔNG phải đang loading 
!isSuccess -> đọc là KHÔNG thành công 
!hasPermission -> Không có quyền 

Tư duy đọc code: 
Trước khi hỏi AI hay Add console.log, debug -> chúng ta nên áp dụng tư duy đọc code từ trên xuống để hiểu logic 

Toán tử tăng/giảm (prefix và post fix)

postfix (i++):  Trả về giá trị cũ của i, rồi sau đó mới TĂNG i lên 1 
prefix (++i): Tăng i lên 1 trước, rồi mới trả về giá trị mới 

sẻ ra 2 câu hỏi: 
giá trị của cả biểu thức i++ hoặc ++i là gì? 
giá trị cuối cùng của biến i sau khi dòng code chạy là gì? 

Lưu ý khi dùng ++/--

