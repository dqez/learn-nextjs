## 📅 Day 05: Next.js Routing (Cơ bản)

### 🎯 Mục tiêu

  * **File-system Routing:** Hiểu cách Next.js tạo các đường dẫn URL dựa trên cấu trúc thư mục.
  * **Component `<Link>`:** Điều hướng giữa các trang một cách hiệu quả (trải nghiệm SPA).
  * **`usePathname`:** Biết cách lấy đường dẫn hiện tại để xử lý trạng thái **Active Link**.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **File-system Routing (Định tuyến dựa trên File):**
      * Next.js tự động tạo route dựa trên các thư mục bên trong `app/`.
      * Để một đường dẫn có thể truy cập được, phải có file **`page.tsx`** bên trong thư mục đó (Ví dụ: `app/about/page.tsx` =\> URL `/about`).
      * **Tương đương .NET:** Giống như ánh xạ thư mục `Views` hoặc cấu trúc Controller.
2.  **Component `<Link>`:**
      * Được sử dụng thay thế cho thẻ `<a>` thông thường.
      * Đảm bảo việc chuyển trang diễn ra nhanh chóng, không tải lại toàn bộ trình duyệt (Single Page Application experience).
3.  **Layout Chung (`layout.tsx`):**
      * Được sử dụng để định nghĩa các thành phần xuất hiện trên nhiều trang (ví dụ: Navbar, Footer).
      * Biến `children` trong `layout.tsx` là nơi nội dung của `page.tsx` sẽ được render vào.
4.  **Hook `usePathname` (Client Component):**
      * Là một **Client Hook** (chỉ có thể được dùng trong Component có `"use client"`).
      * Cho phép truy cập vào đường dẫn URL hiện tại (`/about`, `/contact`).
      * Dùng để xây dựng logic **Active Link** (làm nổi bật đường dẫn đang truy cập).

-----

### 📂 Cấu trúc thư mục (Day 05)

Cấu trúc thư mục đã mở rộng để chứa các routes mới và Component điều hướng:

```
day05/
├── app/
│   ├── about/
│   │   └── page.tsx      // Route: /about
│   ├── contact/
│   │   └── page.tsx      // Route: /contact
│   ├── components/
│   │   └── NavLink.tsx   // Component Client dùng usePathname
│   ├── layout.tsx        // Đã tích hợp NavLink vào Navbar
│   └── page.tsx          // Trang chủ (Route: /)
└── ...
```

-----

### 💻 Kết quả đạt được

  * Đã tạo thành công các trang tĩnh `/about` và `/contact`.
  * Đã tạo thanh Navbar trong `layout.tsx`.
  * Đã xây dựng Component **`NavLink.tsx`** (Client Component) để xử lý logic: nếu `pathname === href`, thì áp dụng CSS `active`.
  * Đã đạt được trải nghiệm điều hướng SPA (chuyển trang nhanh, không tải lại toàn bộ).
