## 📅 Day 08: Server Components (SC) & Client Components (CC)

### 🎯 Mục tiêu

  * **Phân biệt Môi trường:** Hiểu rõ Server Component (SC) chạy ở đâu và Client Component (CC) chạy ở đâu.
  * **Quy tắc `"use client"`:** Nắm vững vai trò và vị trí của chỉ thị này.
  * **Lồng ghép Component:** Thực hành cách nhúng một Component tương tác (CC) vào một Component tĩnh (SC).

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Server Components (SC):**
      * **Mặc định:** Tất cả Component trong thư mục `app/` đều là SC trừ khi có chỉ thị.
      * **Nơi chạy:** Chạy trên **Server** (lúc build hoặc lúc request).
      * **Khả năng:** Truy cập Database/API, hệ thống file. Mã nguồn **không** bị gửi xuống trình duyệt.
      * **Tư duy .NET:** Giống như code Model hoặc Controller xử lý dữ liệu và logic backend.
2.  **Client Components (CC):**
      * **Chỉ thị:** Bắt buộc phải có **`"use client";`** ở dòng đầu tiên của file.
      * **Nơi chạy:** Chạy trên **Trình duyệt (Browser)**.
      * **Khả năng:** Sử dụng **Hooks** (`useState`, `useEffect`), tương tác với các đối tượng toàn cục của trình duyệt (`window`, `localStorage`).
3.  **Lồng ghép (Interleaving) & Data Flow:**
      * **SC có thể import và render CC:** SC sẽ render HTML tĩnh của nó và gửi HTML đó xuống. JS của CC sau đó được tải và kích hoạt (hydrate) ở trình duyệt.
      * **Xem Mã nguồn:** Khi kiểm tra bằng F12:
          * **CC:** Mã JS (logic tương tác) **có thể** được xem trong tab Sources (vì nó được gửi xuống Client).
          * **SC:** Mã JS (logic Server) **không** được gửi xuống, trình duyệt chỉ nhận được kết quả là **HTML tĩnh** được tạo ra từ Server.

-----

### 📂 Cấu trúc thư mục (Day 08)

Chúng ta đã tạo Component tương tác đầu tiên trong môi trường App Router:

```
day08/
├── app/
│   ├── components/
│   │   └── ClientButton.tsx  // Component Client (có "use client" và useState)
│   ├── layout.tsx
│   └── page.tsx              // Server Component (import và render ClientButton)
└── ...
```

-----

### 💻 Kết quả đạt được

  * Đã tạo thành công **`ClientButton.tsx`** (dùng `useState`, chứng minh nó là Client Component).
  * Đã nhúng `ClientButton` vào **`page.tsx`** (Server Component).
  * Đã hiển thị một phần nội dung **tĩnh** được tạo ra từ Server và một phần nội dung **tương tác** được kích hoạt ở Client.
  * Đã hiểu nguyên tắc lồng ghép và sự tách biệt mã nguồn giữa Server và Client.
