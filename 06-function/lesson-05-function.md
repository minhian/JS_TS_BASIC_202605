### Function: Tư duy nó như một cái máy xay sinh tố

Có thể tưởng tượng function như một chiếc máy xay với 3 thành phần cốt lõi:

- **Đầu vào (input/parameter):** Bạn cho trái cây, đường, sữa... vào máy.
- **Quy trình xử lý (body):** Lưỡi dao quay và trộn mọi thứ lại với nhau.
- **Đầu ra (output/return):** Máy trả ra cho chúng ta một ly sinh tố.

Ví dụ nếu không dùng function, ta sẽ phải lặp lại cùng một đoạn code nhiều lần:

**TC1**

```js
console.log("Nhập userName: abc");
console.log("Nhập matKhau: abc");
```

**TC2**

```js
console.log("Nhập userName: abc2");
console.log("Nhập matKhau: abc3");
```

**TC3**

```js
console.log("Nhập userName: abc3");
console.log("Nhập matKhau: aab4");
```

### Điểm mấu chốt mà function giải quyết

- Phần giống nhau được gom vào một nơi.
- Mỗi lần cần dùng chỉ việc gọi lại.
- Nó gắn liền với tư duy **DRY**: đừng lặp lại cùng một đoạn code ở nhiều nơi.

### Các loại function trong JavaScript

Trong JavaScript có 3 loại function. Cú pháp cơ bản đầu tiên chúng ta dùng là **function declaration** (hàm tự định nghĩa).

### Cú pháp

```js
function tenHam(dauVao) {
  // body
  // đầu ra
}
```

### Đầu vào (parameter)

- **Tham số (parameter):** là chỗ trống được khai báo sẵn khi ta tạo function.
- **Đối số (argument):** là giá trị thật được truyền vào khi function chạy.

### Body

- Là nơi chứa logic xử lý của code.

### `return` - Đầu ra

- `return` dùng để trả kết quả từ bên trong function ra bên ngoài.
- Giá trị trả về có thể là:
  - `number`
  - `string`
  - `boolean`
  - `object`
  - `array`
  - ...

- Nơi gọi hàm sẽ nhận lại giá trị đó.
- Khi function gặp `return`, nó sẽ dừng ngay tại đó.
