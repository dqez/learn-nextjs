## 📅 Day 06: Next.js Dynamic Routing

### 🎯 Mục tiêu

  * **Dynamic Routing:** Xây dựng các trang chi tiết (Detail Pages) bằng cách sử dụng tham số động trong URL.
  * **Params Access:** Biết cách truy cập tham số động (`[slug]`) trong Component.
  * **Tối ưu hóa:** Làm quen với **Static Site Generation (SSG)** thông qua `generateStaticParams`.
  * **Xử lý Lỗi:** Sử dụng hàm `notFound()` để hiển thị trang 404 cho các tài nguyên không tồn tại.

-----

### 📝 Kiến thức cốt lõi đã học

1.  **Dynamic Segment (`[folderName]`):**
      * Được định nghĩa bằng việc bọc tên thư mục trong ngoặc vuông (ví dụ: `[slug]`).
      * Cho phép một file `page.tsx` duy nhất xử lý vô số đường dẫn (ví dụ: `/blog/1`, `/blog/a-new-post`).
2.  **Truy cập Tham số (`params`):**
      * Component `page.tsx` nhận một đối tượng `params` chứa các giá trị động từ URL.
      * Trong code đã hoàn thành, bạn sử dụng cú pháp **`await params`** (kiến thức nâng cao về Promise trong RSC) để giải quyết tham số, giúp truy cập giá trị `slug`.
3.  **Static Site Generation (SSG) với `generateStaticParams`:**
      * Hàm `generateStaticParams` chạy **tại thời điểm build** ứng dụng.
      * Nó trả về một mảng chứa tất cả các tham số (slug/id) mà bạn muốn Next.js tạo HTML tĩnh trước.
      * **Lợi ích:** Các trang đã được tạo sẵn sẽ tải cực kỳ nhanh (hiệu suất cao).
4.  **Xử lý Lỗi Not Found (404):**
      * Hàm **`notFound()`** (từ `next/navigation`) được gọi khi logic nghiệp vụ của bạn xác định rằng tài nguyên không tồn tại (ví dụ: `slug == '999'`).
      * Hàm này ngay lập tức dừng quá trình render và chuyển hướng đến trang 404.

-----

### 📂 Cấu trúc thư mục (Day 06)

Cấu trúc đã mở rộng để chứa Dynamic Route:

```
day06/
├── app/
│   ├── blog/
│   │   └── [slug]/               // Thư mục Dynamic
│   │       └── page.tsx          // Component BlogDetailPage, chứa logic generateStaticParams và notFound()
│   ├── components/
│   │   └── ...                   // Các Component cũ
│   └── page.tsx                  // Trang chủ, đã thêm Link tới các trang động
└── ...
```

-----

### 💻 Kết quả đạt được

  * Đã tạo thành công Dynamic Route tại `/blog/[slug]`.
  * Đã hiển thị chính xác giá trị tham số **`slug`** trên trang chi tiết.
  * Đã cấu hình `generateStaticParams` để tạo 3 trang tĩnh `/blog/1`, `/blog/2`, `/blog/3` (SSG).
  * Đã xử lý lỗi 404 bằng hàm `notFound()` khi truy cập URL `/blog/999`.
