## 📅 Day 16: Server Actions (CRUD)

### 🎯 Mục tiêu

- **Hoàn thiện CRUD:** Xây dựng đầy đủ tính năng Thêm (Create), Sửa (Update), Xóa (Delete) bằng Server Actions.
- **Binding Arguments:** Hiểu cách truyền tham số (như `id`) vào Server Action thông qua phương thức `.bind()`.
- **Quản lý Cache:** Sử dụng `revalidatePath` để cập nhật giao diện ngay sau khi dữ liệu thay đổi.

---

### 📝 Kiến thức cốt lõi đã học

1.  **Create Action (Thêm mới):**
    - Sử dụng `formData.get('name')` để lấy dữ liệu từ input.
    - Gọi `prisma.model.create()` để lưu vào Database.
    - Luôn gọi `revalidatePath('/route')` sau khi ghi DB để làm mới dữ liệu trên UI.

2.  **Update & Delete Action (Binding ID):**
    - Vì Server Action trong `<form>` không nhận tham số trực tiếp ngoài `formData`, ta dùng `.bind()` để gán ID cụ thể.
    - Cú pháp: `const deleteAction = deleteTask.bind(null, item.id);`.
    - Điều này giúp Server Action biết chính xác cần Xóa/Sửa bản ghi nào mà không cần Hidden Input phức tạp.

3.  **Data Flow (Luồng dữ liệu):**
    - **Client (Form Submit)** -> **Server Action** -> **Prisma (DB)** -> **Revalidate Path** -> **UI Update**.
    - Không cần tạo API Routes (`/api/...`) hay dùng `fetch` ở Client.

---

### 📂 Cấu trúc thư mục (Day 16)

Cấu trúc thư mục tập trung vào bài học hôm nay:

```text
my-app/
├── app/
│   └── tasks/
│       └── page.tsx      # UI hiển thị List & Forms (Create/Delete/Update)
├── lib/
│   ├── action.ts         # Chứa các hàm: createTask, deleteTask, toggleTaskStatus
│   └── db.ts             # Prisma Client Instance (đã setup từ Day 13)
└── prisma/
    └── schema.prisma     # Định nghĩa Model Task
```
