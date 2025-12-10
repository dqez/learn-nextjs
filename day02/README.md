## 📅 Day 02: Props & State (Dữ liệu Động)

### 🎯 Mục tiêu

  * Hiểu sự khác biệt và vai trò của **Props** và **State**.
  * Làm cho Component trở nên **linh hoạt** bằng cách truyền dữ liệu (Props).
  * Làm cho Component trở nên **tương tác** bằng cách quản lý dữ liệu thay đổi (State).

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Props (Properties): Dữ liệu Đầu vào**
      * **Vai trò:** Truyền dữ liệu **từ Component Cha xuống Component Con**.
      * **Nguyên tắc:** Props là **bất biến (Read-only)**. Component con không được thay đổi giá trị của props.
      * **Cách dùng:** Props là tham số của hàm Component. Dùng Destructuring để truy cập trực tiếp: `const { name, title } = props;`.
      * **Tương đương .NET:** Giống như truyền ViewModel/Parameters vào một Partial View.
2.  **State (`useState`): Dữ liệu Nội bộ**
      * **Vai trò:** Quản lý dữ liệu **thay đổi theo thời gian** (ví dụ: đếm, bật/tắt menu, input form).
      * **Hook:** Sử dụng `const [value, setValue] = useState(initialValue);`.
      * **Cập nhật:** Phải gọi hàm `setValue()` để thông báo cho React **render lại** Component với giá trị mới.
      * **Độc lập:** Mỗi phiên bản (instance) của Component có một State riêng biệt.
3.  **Xử lý Sự kiện (Events):**
      * Sự kiện được viết theo cú pháp **camelCase** (ví dụ: `onClick`).
      * Hàm xử lý sự kiện được truyền trực tiếp vào thuộc tính, ví dụ: `<button onClick={myFunctionName}>`.

-----

### 📂 Cấu trúc thư mục (Day 02)

Chúng ta tiếp tục làm việc trên các file đã tạo ở Day 01:

```
day02/
├── Button.js          // Đã thêm useState (Đếm số lần click)
├── ProfileCard.js     // Đã thêm Props (name, title) và useState (Đếm Like)
└── App.js             // Component cha, truyền Props khác nhau cho 3 ProfileCard
```

-----

### 💻 Kết quả đạt được

Đã nâng cấp Component tĩnh thành động và tương tác:

  * **`ProfileCard.js`:**
      * Nhận và hiển thị dữ liệu động (name, title) thông qua **Props**.
      * Thực hiện tính năng "Đếm Like" bằng cách sử dụng **`useState`** và sự kiện **`onClick`**.
      * Mỗi thẻ Card đếm Like **độc lập**.
  * **`Button.js`:**
      * Đã thêm tính năng đếm số lần nhấn vào nút, sử dụng **`useState`** để cập nhật UI.
