## 📅 Day 17: Validation & Error Handling (Zod)

### 🎯 Mục tiêu

- **Hiểu Runtime Validation:** Tại sao TypeScript thôi là chưa đủ và cần Zod để kiểm tra dữ liệu đầu vào thực tế (giống Data Annotations trong .NET).
- **Quy trình Validation:** Thiết lập Zod Schema -> Validate trong Server Action -> Trả lỗi về Client.
- **Tương tác Client-Server:** Sử dụng Hooks (`useFormState` hoặc `useActionState`) để hiển thị lỗi validation ngay trên UI.
- **Refactoring:** Tách biệt rõ ràng giữa Server Component (Logic lấy dữ liệu) và Client Component (Logic Form).

---

### 📝 Kiến thức cốt lõi đã học

1. **Zod Schema & Type Inference:**

- Sử dụng `z.object({...})` để định nghĩa luật (Schema).
- Sử dụng `z.infer<typeof Schema>` để tự động tạo kiểu TypeScript, giúp Code (DTO) và Validation luôn đồng bộ.

2. **Server Action Pattern (Validation):**

- Không tin tưởng `formData` từ client. Luôn dùng `Schema.safeParse(data)`.
- Trả về object có cấu trúc chuẩn: `{ message: string, errors: { ... } }`.
- Xử lý kiểu dữ liệu cho `prevState` (dùng `any` hoặc `FormState | undefined`) để tránh xung đột type với Hook.

3. **Modern React Hooks (Form Handling):**

- **`useFormState`** (React DOM): Hook tiêu chuẩn hiện tại để binding Form với Server Action.
- **`useActionState`** (React 19/Next.js 15): Phiên bản mới của `useFormState`, bổ sung biến `isPending` để xử lý trạng thái loading (disable nút submit) dễ dàng hơn.
- **Quy tắc bất di bất dịch:** Hook chỉ chạy trong file có `'use client'`.

4. **Kiến trúc Component (Clean Code):**

- **Server Component (`page.tsx`):** Fetch dữ liệu từ DB, Render Layout, truyền Props.
- **Client Component (`TaskForm.tsx`):** Chứa Form, State, Validation UI, Interactive Logic.

---

### 📂 Cấu trúc thư mục (Day 17)

Cấu trúc các file quan trọng sau khi tách component:

```text
src/
├── actions/
│   └── actionTask.ts       # (Server Action) Chứa logic validate Zod và gọi DB
├── components/
│   └── TaskForm.tsx        # (Client Component) Chứa Form, useActionState/useFormState
├── lib/
│   └── schema.ts           # (Shared) Định nghĩa Zod Schema và Types
└── app/
    └── tasks/
        └── page.tsx        # (Server Page) Fetch list task và nhúng <TaskForm />

```

---

### 💻 Kết quả đạt được

- ✅ **An toàn dữ liệu:** Hệ thống từ chối các Task không hợp lệ (Rỗng, quá ngắn...) trước khi gọi vào DB.
- ✅ **Trải nghiệm người dùng (UX):** Hiển thị lỗi màu đỏ rõ ràng ngay dưới ô input tương ứng.
- ✅ **Code chất lượng:** Khắc phục lỗi trộn lẫn Server/Client logic. Code dễ bảo trì và mở rộng.

---
