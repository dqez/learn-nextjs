## 📅 Day 01: React Component & JSX

### 🎯 Mục tiêu

  * Nắm được khái niệm **Component** và cách chia nhỏ giao diện.
  * Làm quen với cú pháp **JSX** (JavaScript XML).
  * Thực hành `import` và `export` để lắp ghép các Component.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Component là Function (Hàm):** Một Component React đơn giản là một hàm JavaScript, có tên bắt đầu bằng chữ hoa, trả về giao diện người dùng.
2.  **JSX:** Là phần mở rộng của JavaScript, cho phép chúng ta viết code giống HTML ngay bên trong file JS.
      * Sử dụng **camelCase** cho các thuộc tính HTML (ví dụ: `onClick` thay vì `onclick`).
      * Sử dụng **`className`** thay vì `class`.
3.  **Lắp ghép (Composition):** Chúng ta có thể sử dụng một Component bên trong Component khác giống như dùng một thẻ HTML (`<Button />` nằm trong `<ProfileCard />`).
4.  **Export & Import:**
      * **`export default`**: Chỉ cho phép một export duy nhất trong file. Khi import, có thể đặt tên bất kỳ.
      * **`export function X` (Named Export)**: Cho phép export nhiều thứ. Khi import, phải dùng đúng tên và có dấu ngoặc nhọn `{ X }`.

-----

### 📂 Cấu trúc thư mục (Day 01)

(sử dụng `.js` cho phần học React Core):

```
day01/
├── Button.js          // Component nút bấm cơ bản (Đã học Export Default)
├── ProfileCard.js     // Component hiển thị thông tin tĩnh (Đã học Export Named)
└── App.js             // Component chính, nơi lắp ghép 3 ProfileCard và 1 Button
```

-----

### 💻 Kết quả đạt được

Đã tạo thành công 3 Component riêng biệt và lắp ghép chúng lại trong Component chính (`App.js`), chứng minh khả năng chia nhỏ giao diện:

  * `Button.js`: Nút "Nhấn vào đây" (dùng `export default`).
  * `ProfileCard.js`: Thẻ thông tin tĩnh (dùng `export function ProfileCard`).
  * `App.js`: Hiển thị 3 thẻ Profile và 1 nút Button.
