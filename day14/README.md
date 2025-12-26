## 📅 Day 14: Review & Project nhỏ (CRUD Delete)

### 🎯 Mục tiêu

* **Tổng hợp kiến thức:** Củng cố luồng dữ liệu từ Server Component đến Database qua Prisma.
* **Xây dựng API:** Làm chủ Route Handlers (GET/DELETE) để xử lý logic phía Backend.
* **Tương tác Client-Server:** Kết hợp Client Component (Button) với Backend API để thực hiện tính năng xóa dữ liệu.

---

### 📝 Kiến thức cốt lõi đã học

1. **Luồng dữ liệu trong Next.js (App Router):**
* Tối ưu hóa luồng: `Browser -> Server Component -> Prisma -> DB`.
* Server Component đóng vai trò thay thế cho cả Controller và View trong mô hình truyền thống (.NET/MVC).


2. **Route Handlers (API Routes):**
* Sử dụng cấu trúc thư mục `app/api/.../route.ts` để tạo các điểm cuối API.
* Xử lý Dynamic Route Params theo chuẩn Next.js 15 (Sử dụng `Promise` cho `params`).


3. **Tương tác phía Client:**
* Sử dụng `use client` cho các thành phần cần sự kiện (onClick) và phản hồi người dùng (alert, confirm).
* Sử dụng `router.refresh()` để yêu cầu máy chủ cập nhật lại dữ liệu cho Server Component mà không cần tải lại toàn bộ trang.



---

### 📂 Cấu trúc thư mục (Day 14)

Cấu trúc thư mục tập trung vào bài học hôm nay:

```text
my-next-app/
├── app/
│   ├── api/
│   │   └── users/
│   │       └── [id]/
│   │           └── route.ts      # API Delete User
│   ├── page.tsx                  # Server Component hiển thị danh sách
│   └── layout.tsx
├── components/
│   └── DeleteButton.tsx          # Client Component xử lý nút xóa
└── lib/
    └── db.ts                     # Prisma Client (Singleton)

```

---

### 💻 Kết quả đạt được

* Hiểu sâu sự khác biệt và phối hợp giữa Server Component (lấy data) và Client Component (tương tác).
* Hoàn thành API Delete người dùng với Prisma, xử lý ép kiểu `parseInt` cho ID và bắt lỗi hệ thống.
* Giao diện danh sách người dùng tự động cập nhật mượt mà nhờ `router.refresh()`.
