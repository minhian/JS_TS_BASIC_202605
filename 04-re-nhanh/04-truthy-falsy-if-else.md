

Cấu trúc if/else if/else ngã tư nhiều lối rẽ: 
Cấu trúc: 
If (điều kiện 1) {
    chạy nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    chạy nếu đk 1 sai, nhưng dk 2 đúng
} else if (điều kiện 3) {
    chạy nếu các điều kiện trên đều sai, nhưng đk 3 đúng
} else {
    chạy nếu tất cả các ddkien trên sai
}

Quy tắc: 
luôn bắt đầu bằng if 
có thể 0,1 hoặc nhiều else if 
else là tùy chọn không bắt buộc 

Nếu có else thì luôn đứng cuối cùng trong cả cụm này, máy tính chỉ chạy 1 nhánh duy nhất
Nếu điều kiện nào đúng đầu tiên thì nó chạy vào nhánh đó và BỎ QUA TẤT CẢ các nhánh bên dưới.

2. Toán tử 3 ngôi - lối tắt của if/else 
vì nó có 3 thành phần.
Syntax (cú pháp): 
let biến = điều kiện ? giá trị nếu đúng : giá trị nếu sai 
dấu ? -> mang ý nghĩa hỏi xem điều kiện đúng hay sai? 
dấu : mang ý nghĩa ngăn cách giữa đúng (bên trái) và sai bên phải 
-> CÁCH ĐỌC: nếu điều kiện đúng thì lấy vế bên trái dấu :, còn sai  thì lấy dấu bên phải

BEST PRACTICE - khi nào dùng
... if/else là câu lệnh rẽ nhánh : dùng dể quyét định chạy khối code nào
toán tử 3 ngồi ? : là biểu thức đùng tạo ra 1 giá trị
Khi nào ưu tiên toán tử 3 ngôi
khi
bạn chỉ cần chọn 1 giá trị
bài toán chỉ có 2 kết quả
mỗi nhánh đều ngắn và dọc phát hiểu gnay
-> rất phù hợp cho các case gán text cho biến, chọn config, return 1 giá trị ngắn,, hiển thị nhãn đơn giản 

Ưu tiên if.else khi: 
Trong mỗi nhánh có nhiều hành động 
bạn cần clg, click, screnshot, gọi api, ...
bạn cần đọc code thật rõ từng bức
..biết là sẽ còn mở rộng thêm logic

Truthy vs Falsy 
Bình  thường : câu lệnh if(đk) đòi hỏi điều kiện bên trong phải là boolean (T or F)

Nếu bạn đưa vào 1 string, number, 1 object... -> Js nó thường ko báo lỗi ngay, thay vào đó nó sẽ làm 1 bước ngầm là ÉP KIỂU

ví dụ: 
if(giá trị bất kỳ) -> JS sẽ tự xử lý theo kiểu sau: 
    Gía trị bất kỳ đã là T or F chưa? NẾU CHƯA hãy tạm thời đổi sang boolean 
            Nếu kết quả True thì vào if, False thì vào else 

thằng if ko hỏi mày thuộc kiểu dữ liệu gì
mà nó hỏi: trong ngữ cảnh điều kiện, tao nên xem mày là ĐÚNG HAY SAI

đó là lý do tại sao sinh 2 khái niệm
TRUTHY: ko phải boolean thật, nhưng khi đưa vào if thì xem là true
FALSY: ko phải boolean thật, nhưg khi đưa vào if thì xem là false

QUY TẮC
Những giá trị mang năng lượng tiêu cực, trống rỗng, vô nghĩa -> bị ép thành false -> gọi là falsy
con tất CẢ NHỮNG THỨ CÒN LẠI trên đời -> bị ép thành true -> TRUTY

LIST 6 thằng FALSY
false
0 (số ko)
"" (chuỗi rỗng)
null (rỗng)
undefined (chưa xác định)
NaN (lỗi số học)

TẤT CẢ ĐIỀU KIỆN KAHSC ĐC COI LÀ TRUTHY nhưng chú ý các bẫy

//Trò lừa bằng string
"0": Một chuỗi chứa số 0 -> TRUTHY
"false" -> TRUTHY
" " -> TRUTHY

//Object/array
[]: 1 cái mảng rỗng -> TRUTHY
{}: 1 cái object rỗng -> TRUTHY

Nếu biên đã mang nghĩa là đúng hay sai (isLogin, haspermission)-> dùng trực tiếp
nêus dữ liệu là số, chuỗi màng , thì chỉ nên dự vào truthy/falsy khi ý nghĩa của nó thực sự rõ ràng