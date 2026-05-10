clg -> console.log()
viết ký tự trong prefix + tab -> ra luôn console log 

file .md = markdown 

    Công dụng của biến: lưu trữ dữ liệu (giá trị) để máy tính có thể nhớ và sử dụng lại sau này 

    Cách khai báo biến theo cú pháp: [từ khóa] [tên biến] = [giá trị]
    
    A. let (chiếc hộp linh hoạt ) -> dùng khi bạn biết giá trị của biến có thể thay đổi trong tương lai. (sử dụng let lần đầu tiên, lần sau không cần sử dụng let nữa)

    Dùng console.log (tên biến) để in giá trị của biến ra màn hình. giúp kiểm tra và debug.

    B. Const (chiếc hộp niêm phong)
    viết tắt của constant (hằng số) -> sử dụng khi bạn muốn giá trị này không bao giờ thay đổi sau khi đã khai báo

    => JS đọc code từ trên xuống dưới, dòng nào đúng thì chạy, đến dòng bị lỗi sẽ show lỗi ở dòng bao nhiêu

    Các quy tắc đặt tên biến: 
    1. ký tự đặc biệt: KHÔNG dùng dấu gạch ngang "-", chỉ ĐƯỢC dùng dấu gạch dưới "_"  (JS sẽ hiểu đó là dấu trừ)
    2. KHÔNG được để số ở đầu
    3. KHÔNG chứa khoảng trắng
    4. KHÔNG được dùng từ khóa của Javascript ("reserved keywords") (các từ ví dụ như: if, function, test, return, ... ) 

    Quy tắc ngầm: 
            naming convention 
            -> Vi phạm điều này code vẫn chạy, nhưng sẽ gây khó chịu cho đồng nghiệp, phải tuân theo chuẩn code convention
            Một số ví dụ khi đặt tên biến gây khó chịu: 
                let thongtinhocvien -> khó nhìn 
                let thong_tin_hoc_vien -> gọi là snake case -> tạm chấp nhận -> thường đc sử dụng trong python/SQL
                let ThongTinHocVien -> gọi là pascal case -> chỉ dùng cho class, KHÔNG dùng cho biến 

            Dùng camel case (chuẩn js/ts) let thongTinHocVien = 'abc'  => ĐÂY LÀ CÁCH ĐẶT TÊN BIẾN CHUẨN 
            (tưởng tượng con lạc đà có cái nướu cao lên ở đầu rồi trùng xuống -> viết thường rồi sau đó viết hoa chữ cái đầu của các chữ sau)

        Nghệ thuật đặt tên (clean code): 
        1. hãy đặt tên sao cho đọc lên là hiểu nó chứa cái gì -> TRÁNH đặt tên vô nghĩa 

        2. Đặt tên biến Boolean (true/flase)
            sẽ đặt tên biến có chữ "is" ở đầu 

        Ví dụ: let open = false -> KHÔNG HIỂU GÌ    -> sửa lại là: let isOpen = false -> (cửa có đang mở không -> false: sai -> không mở)
                let hasPermission = true (có quyền truy cập hay không -> có )

        3. Tiếng Anh/ Tiếng Việt: 
        NÊN sử dụng tiếng anh khi code, KHÔNG sử dụng Tiếng Việt có dấu khi code -> dễ gây lỗi mã hóa

        


