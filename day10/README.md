## 📅 Day 10: Error Handling & Server Actions

### 🎯 Mục tiêu

* **Xử lý lỗi hệ thống:** Sử dụng `error.tsx` để bao vây các lỗi runtime.
* **Xử lý lỗi điều hướng:** Tùy chỉnh trang `not-found.tsx`.
* **Server Actions:** Thực hiện tương tác gửi dữ liệu từ Client lên Server mà không cần API Route.

### 📝 Kiến thức cốt lõi đã học

1. **`error.tsx` (Client Component):**
* Tự động bắt lỗi cho các segment phía dưới nó.
* Cung cấp hàm `reset()` để người dùng có thể thử tải lại vùng bị lỗi mà không cần load lại cả trang.


2. **`not-found.tsx`:**
* Hiển thị khi hàm `notFound()` được gọi hoặc khi URL không khớp với bất kỳ route nào.


3. **Server Actions (`'use server'`):**
* Cho phép định nghĩa các hàm xử lý dữ liệu (DB, Email, Logging) chạy hoàn toàn ở Server.
* Có thể gọi trực tiếp từ thuộc tính `action` của thẻ `<form>`.
* Giúp giảm đáng kể lượng code "boilerplate" so với việc viết API Route truyền thống.



### 📂 Cấu trúc thư mục (Day 10)

```
day10/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   ├── CommentForm.tsx  // Client Component xử lý Form
│   │   │   └── page.tsx         // Hiển thị bài viết + Form
│   │   ├── actions.ts           // Nơi chứa các Server Actions
│   │   └── error.tsx            // Bắt lỗi cho toàn bộ phân mục Blog
│   ├── not-found.tsx            // Trang 404 toàn cục
│   └── ...

```

### 💻 Kết quả đạt được

* Ứng dụng có khả năng tự phục hồi khi gặp lỗi API nhờ `error.tsx`.
* Trang 404 chuyên nghiệp, hướng dẫn người dùng quay lại trang chủ.
* Thực hiện thành công tính năng **Gửi bình luận** bằng Server Actions, dữ liệu được truyền an toàn từ Client và in ra tại Console của Server.
