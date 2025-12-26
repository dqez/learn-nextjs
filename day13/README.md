## 📅 Day 13: CRUD - Read & Prisma Setup (Adapters)

### 🎯 Mục tiêu

* **Setup Prisma với SQLite:** Khởi tạo môi trường Database nhẹ nhàng cho project mới.
* **Prisma Driver Adapters:** Cấu hình Prisma 7 với LibSQL adapter để tối ưu hóa hiệu năng.
* **Fetch Data (Read):** Sử dụng Server Component để truy vấn dữ liệu trực tiếp từ Database (tương tự EF Core trong .NET).
* **Form & Cache Theory:** Tìm hiểu cách thu thập dữ liệu qua `FormData` và cơ chế làm mới cache với `revalidatePath`.

---

### 📝 Kiến thức cốt lõi đã học

1. **Prisma Setup (Modern Approach):**
* Cách chuyển đổi Provider sang `sqlite` và cấu hình `DATABASE_URL="file:./dev.db"`.
* Sử dụng `previewFeatures = ["driverAdapters"]` trong `schema.prisma` để tương thích với các Driver hiện đại.
* Khởi tạo Singleton Pattern cho `PrismaClient` trong `lib/db.ts` để tránh lỗi tràn kết nối khi Hot Reload.


2. **Data Fetching trong Server Component:**
* Next.js cho phép gọi trực tiếp Database trong `page.tsx` (Server Component) mà không cần qua tầng API Controller trung gian.
* Cú pháp `await db.user.findMany()` tương đương với `_context.Users.ToListAsync()` trong C#.


3. **Form Actions & revalidatePath:**
* Sử dụng thuộc tính `action` của `<form>` thay cho `onSubmit` để tận dụng tính năng Progressive Enhancement.
* **revalidatePath:** Cơ chế xóa bỏ bản cache cũ của Server (Data Cache), ép Next.js render lại dữ liệu mới nhất sau khi có thay đổi (Create/Update/Delete).



---

### 📂 Cấu trúc thư mục (Day 13)

Cấu trúc thư mục tập trung vào bài học hôm nay:

```text
day-13-project/
├── prisma/
│   ├── schema.prisma      # Định nghĩa Model & Adapter
│   └── dev.db             # File Database SQLite
├── lib/
│   └── db.ts              # Singleton Prisma Client (DbContext)
├── components/
│   └── UserForm.tsx       # Client Component xử lý giao diện Form
└── app/
    └── users/
        └── page.tsx       # Server Component hiển thị danh sách User

```

---

### 💻 Kết quả đạt được

* Khởi tạo thành công Database SQLite và migrate Schema `User`.
* Hiển thị danh sách người dùng từ Database lên giao diện web.
* Tạo được Form thu thập dữ liệu bằng `FormData` sẵn sàng cho việc xử lý ở phía Server.
* Nắm vững tư duy làm mới dữ liệu (Cache Invalidation) trong Next.js App Router.
