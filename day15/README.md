## 📅 Day 15: Server Actions (Intro)

### 🎯 Mục tiêu
* **Hiểu về Server Actions:** Nắm vững khái niệm hàm chạy trên Server được gọi trực tiếp từ giao diện.
* **Cấu trúc "use server":** Biết cách phân tách logic server ra file riêng biệt để quản lý.
* **Form Submission:** Thực hiện gửi dữ liệu từ Form HTML truyền thống sang Server Action mà không cần API Route thủ công.

---

### 📝 Kiến thức cốt lõi đã học

1.  **Khái niệm Server Actions:**
    * Là các hàm `async` thực thi trên server nhưng có thể được gọi từ cả Server Components và Client Components.
    * Giúp giảm thiểu việc viết boilerplate code (fetch, useEffect, loading states) so với API Routes thông thường.
    * Tương đồng với mô hình xử lý Form trong ASP.NET Core Razor Pages hoặc Blazor Server.

2.  **Chỉ thị "use server":**
    * Đặt ở đầu file (`.ts` hoặc `.js`) để biến tất cả các hàm trong file đó thành Server Actions.
    * Giúp bảo mật logic: Code bên trong các hàm này không bao giờ bị gửi xuống trình duyệt của người dùng.

3.  **Xử lý FormData:**
    * Sử dụng đối tượng `FormData` để lấy dữ liệu từ các input dựa trên thuộc tính `name`.
    * Hỗ trợ tốt cho việc upload file và tự động tích hợp với cơ chế reset form mặc định của trình duyệt/Next.js.

---

### 📂 Cấu trúc thư mục (Day 15)
Cấu trúc thư mục tập trung vào bài học hôm nay:
```text
my-next-app/
├── app/
│   ├── lib/
│   │   └── actions.ts       # Nơi chứa các Server Actions ("use server")
│   └── contact/
│       └── page.tsx         # Form sử dụng thuộc tính action={createInquiry}
└── ...

```

---

### 💻 Kết quả đạt được

* Đã tạo thành công Server Action đầu tiên trong file `actions.ts`.
* Xây dựng được Form liên hệ hoạt động mượt mà, nhận dữ liệu tại Terminal của Server.
* Hiểu được cơ chế tự động reset form và ưu điểm của việc dùng `FormData`.
