## 📅 Day 07: UI/CSS với Tailwind CSS & SIDE PROJECT - "QR Gen & Share"

-----
### Phần 1: UI/CSS với Tailwind CSS trong Next.js
### 🎯 Mục tiêu

  * **Utility-First:** Nắm bắt triết lý sử dụng các lớp tiện ích (utility classes) của Tailwind.
  * **Tốc độ:** Tăng tốc độ xây dựng giao diện bằng cách áp dụng các lớp trực tiếp trong JSX.
  * **Responsive Design:** Sử dụng các tiền tố breakpoint (`sm:`, `md:`, `lg:`) để tạo bố cục thích ứng.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Tailwind CSS (Utility-First):**
      * Thay vì viết CSS thủ công, chúng ta sử dụng các lớp có sẵn (ví dụ: `bg-blue-500`, `p-4`, `flex`, `shadow-md`) trực tiếp trong thuộc tính `className` của các thẻ HTML/JSX.
      * **Lợi ích:** Phát triển nhanh chóng và dễ bảo trì vì style được đặt gần Component.
2.  **Responsive Design (Thiết kế Phản hồi):**
      * Tailwind sử dụng **tiền tố (prefix)** để áp dụng style chỉ khi đạt đến một kích thước màn hình nhất định (breakpoint).
      * *Ví dụ:* **`md:grid-cols-2`** nghĩa là "từ màn hình trung bình (768px) trở lên, áp dụng bố cục 2 cột".
3.  **Flexbox và Grid:**
      * Đã sử dụng `flex`, `justify-between`, `items-center` để sắp xếp các thành phần Navbar.
      * Đã sử dụng `grid` và `grid-cols-X` để tạo bố cục lưới tự động thay đổi số cột theo kích thước màn hình.
4.  **Hiệu ứng (Effects):**
      * Đã sử dụng các lớp giả (`hover:bg-indigo-700`) và lớp `transition-colors` để thêm hiệu ứng mượt mà khi người dùng tương tác.

-----

### 📂 Cấu trúc thư mục (Day 07)

Các thay đổi chủ yếu diễn ra ở `layout.tsx` và các Component giao diện:

```
day07/
├── app/
│   ├── blog/
│   │   ├── page.tsx          // Mới: Trang danh sách Blog, áp dụng Responsive Grid
│   │   └── [slug]/...
│   ├── components/
│   │   └── MyButton.tsx      // Button đã được style hoàn toàn bằng Tailwind
│   ├── layout.tsx            // Navbar đã được style chuyên nghiệp bằng Tailwind
│   └── page.tsx              // Trang chủ
└── ...
```

-----

### 💻 Kết quả đạt được

  * Đã style Component `MyButton` và các thẻ Card bằng các lớp Utility Class của Tailwind.
  * Đã hoàn thiện giao diện **Navbar** chung (trong `layout.tsx`) với bố cục căn giữa và các hiệu ứng `hover`.
  * Đã xây dựng **Blog Listing Page** với bố cục Grid linh hoạt (1 cột -\> 2 cột -\> 3 cột) khi thay đổi kích thước trình duyệt.

-----

### PHẦN 2: SIDE PROJECT - "QR Gen & Share"
*Một tool nhỏ nhưng xử lý kỹ thuật rất tinh tế về Encoding và Clipboard API.*

* **Tech Stack:** Next.js (App Router - Client Component), React Hooks, Tailwind CSS, thư viện `qrcode`.
* **Chức năng chính:**
    1.  **Generate QR:** Tạo mã QR từ input text bất kỳ.
    2.  **Custom Share Link:** Mã hóa nội dung input thành Base64 để tạo link chia sẻ (vd: `domain/share/[base64string]`).
    3.  **Download:** Tải ảnh QR về máy.
* **Điểm nhấn kỹ thuật (Technical Highlights):**
    * **Xử lý Encoding:** Khắc phục nhược điểm của `btoa` gốc bằng cách dùng `encodeURIComponent` để hỗ trợ **Tiếng Việt (UTF-8)** trong chuỗi Base64.
    * **Smart Copy:** Sử dụng `ClipboardItem` và `Blob` để copy đa định dạng (MIME types) cùng lúc.
        * Paste vào Zalo/Messenger/Word ➝ Ra **Ảnh QR**.
        * Paste vào Browser/Notepad ➝ Ra **Link chia sẻ**.
