## 📅 Day 12: Database - Prisma Setup (MySQL)

### 🎯 Mục tiêu

* **Cấu hình ORM:** Thiết lập Prisma kết nối thành công với MySQL local (localhost).
* **Định nghĩa Schema:** Tạo cấu trúc dữ liệu cho Model User và Task bằng ngôn ngữ Prisma (tương tự định nghĩa Class trong EF Core).
* **Tối ưu kết nối:** Triển khai Singleton Pattern cho Prisma Client để tránh lỗi "pool timeout" do cơ chế Fast Refresh của Next.js.

---

### 📝 Kiến thức cốt lõi đã học

1. **Prisma ORM & MySQL:**
* Cách cấu hình `DATABASE_URL` trong file `.env` cho MySQL local: `mysql://user:pass@localhost:3306/db_name`.
* Sự tương đồng giữa Prisma và Entity Framework Core (.NET) trong việc quản lý dữ liệu.


2. **Migration & Client Generation:**
* Sử dụng lệnh `npx prisma migrate dev` để chuyển đổi các định nghĩa Model thành bảng thực tế trong Database.
* Hiểu về `npx prisma generate` để cập nhật IntelliSense và kiểu dữ liệu (Types) cho source code.


3. **Singleton Pattern cho Database Client:**
* Sử dụng `globalThis` để duy trì một instance duy nhất của `PrismaClient` trong suốt vòng đời ứng dụng ở môi trường Development.
* Giải quyết lỗi cạn kiệt pool kết nối (Connection Pool) khi code thay đổi liên tục.



---

### 📂 Cấu trúc thư mục (Day 12)

Cấu trúc thư mục tập trung vào bài học hôm nay:

```text
├── prisma/
│   ├── schema.prisma      # File cấu hình chính của Prisma
│   └── migrations/        # Lưu trữ các file SQL migration
├── lib/
│   └── db.ts              # Export Prisma Client Singleton
├── .env                   # Lưu trữ chuỗi kết nối MySQL
└── app/
    └── about/
        └── page.tsx       # Trang thực hành hiển thị dữ liệu từ DB

```

---

### 💻 Kết quả đạt được

* Kết nối thành công Next.js với MySQL đang chạy trên localhost.
* Thực hiện thành công Migration đầu tiên để tạo bảng User.
* Fetch và render dữ liệu thực tế từ Database lên giao diện web thông qua Server Component.
