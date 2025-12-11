## 📅 Day 03: Side Effects (`useEffect`)

### 🎯 Mục tiêu

  * Hiểu cách xử lý các tác vụ ngoài phạm vi render (Side Effects).
  * Kiểm soát thời điểm chạy của các Side Effect bằng **Dependency Array**.
  * Nắm được cách xử lý **Cleanup** (dọn dẹp bộ nhớ) khi Component bị gỡ bỏ.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Side Effects (Tác vụ phụ):**
      * Là các hành động tương tác với bên ngoài Component (ví dụ: gọi API, thiết lập timer, thao tác DOM thủ công).
      * Phải được đặt bên trong **`useEffect`** để tránh lặp vô tận (infinite loop).
2.  **Hook `useEffect`:**
      * Nhận hai tham số: **Hàm Effect** (code chạy) và **Dependency Array** (mảng phụ thuộc).
      * **Tương đương .NET:** Giúp mô phỏng các phương thức vòng đời như `OnLoad` hay `OnDestroy`.
3.  **Dependency Array (Mảng Phụ thuộc):**
      * **`[]` (Mảng rỗng):** Effect chỉ chạy **DUY NHẤT một lần** sau lần render đầu tiên (tương đương `componentDidMount` / `OnLoad`). Thường dùng để gọi API ban đầu.
      * **`[name (props), likes (state)]`:** Effect chạy lại khi bất kỳ giá trị nào trong mảng thay đổi (tương đương `componentDidUpdate`).
      * **Không có mảng:** Effect chạy sau **mỗi lần** render (tránh dùng).
4.  **Cleanup Function (Dọn dẹp):**
      * **`useEffect`** có thể trả về một hàm (return function).
      * Hàm này sẽ chạy khi Component bị **unmount** (gỡ bỏ khỏi DOM) hoặc trước khi effect chạy lại.
      * **Tác dụng:** Quan trọng để xóa timer, hủy subscription, tránh memory leak.
5.  **Conditional Rendering:**
      * Sử dụng toán tử điều kiện trong JSX để ẩn/hiện Component: `{showCards ? <ComponentA /> : <ComponentB />}`.

-----

### 📂 Cấu trúc thư mục (Day 03)

Tiếp tục làm việc trên các file đã có, thêm logic mới:

```
day03/
├── Button.js
├── ProfileCard.js     // Đã thêm useEffect (Mounting & Cleanup)
└── App.js             // Đã thêm useState (showCards) và Conditional Rendering
```

-----

### 💻 Kết quả đạt được

Đã làm chủ được vòng đời cơ bản của Component:

  * **Mounting (Tải xong):** Đã chạy `console.log` chỉ một lần khi `ProfileCard` được hiển thị.
  * **Unmounting (Gỡ bỏ):** Đã chạy hàm `cleanup` (return function) khi nhấn nút "Ẩn Hết Cards".
  * **Conditional Rendering:** Đã sử dụng State (`showCards`) để kiểm soát việc hiển thị toàn bộ các thẻ Profile.
