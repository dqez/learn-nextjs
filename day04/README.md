## 📅 Day 04: Next.js Setup & TypeScript

### 🎯 Mục tiêu

  * **Setup Môi trường:** Khởi tạo dự án Next.js mới nhất (App Router, TypeScript, Tailwind CSS).
  * **Cấu trúc:** Hiểu vai trò của các file cốt lõi (`layout.tsx`, `page.tsx`).
  * **TypeScript:** Áp dụng Interface vào Component để định nghĩa Props.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Cài đặt Next.js:**
      * Sử dụng lệnh `npx create-next-app@latest` và lựa chọn **App Router**, **TypeScript**, **Tailwind CSS** để tạo môi trường phát triển chuẩn Full-stack.
2.  **Cấu trúc App Router:**
      * **`app/`:** Thư mục gốc chứa toàn bộ các routes và logic của ứng dụng.
      * **`layout.tsx`:** Component Wrapper chung, chứa các thẻ HTML/Body và Navigation/Footer (tương đương `_Layout.cshtml`).
      * **`page.tsx`:** Component chính đại diện cho nội dung của một đường dẫn URL (tương đương View).
3.  **Server Components (Mặc định):**
      * Mọi Component trong thư mục `app/` là **Server Component** (SC) trừ khi có chỉ thị `"use client"`.
4.  **TypeScript và Interface:**
      * Đã sử dụng **`interface`** (ví dụ: `interface ProfileProps { name: string; title: string; }`) để định nghĩa hình dạng dữ liệu của Props, giúp tránh lỗi Runtime và cải thiện khả năng bảo trì (tương tự Class/Interface trong C\#).
5.  **Lỗi và Khắc phục (`"use client"`):**
      * Chỉ thị `"use client"` **phải nằm ở dòng đầu tiên** của file (trước cả `import` và `interface`) để Next.js biên dịch Component đó là Component phía trình duyệt.

-----

### 📂 Cấu trúc thư mục (Day 04)

Bạn nên có một cấu trúc cơ bản như sau:

```
my-nextjs-project/
├── app/
│   ├── components/
│   │   └── ProfileCard.tsx   // Component đã được sửa lỗi và dùng TS
│   ├── layout.tsx            // Layout chính của ứng dụng
│   ├── page.tsx              // Trang chủ (đã dọn dẹp)
│   └── globals.css           // File CSS toàn cục (chỉ giữ lại Tailwind setup)
└── ...
```

-----

### 💻 Kết quả đạt được

  * Đã thiết lập thành công môi trường Next.js/TS/Tailwind.
  * Đã dọn dẹp code mẫu và hiển thị Component **`ProfileCard.tsx`** (Client Component) bên trong trang chủ **`page.tsx`** (Server Component).
  * Đã áp dụng TypeScript để định nghĩa kiểu dữ liệu cho `props`, tăng cường tính an toàn cho mã nguồn.
