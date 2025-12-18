## 📅 Day 09: Data Fetching trong Server Components

### 🎯 Mục tiêu

* **Server-side Fetching:** Hiểu cách lấy dữ liệu trực tiếp từ nguồn (API/DB) ngay bên trong Server Component.
* **Async Components:** Sử dụng cú pháp `async/await` đồng bộ với luồng render của Next.js.
* **User Experience:** Xây dựng trạng thái chờ (`Loading UI`) chuyên nghiệp.
* **Caching:** Làm quen với cơ chế lưu trữ dữ liệu tạm thời để tối ưu hiệu suất.

---

### 📝 Kiến thức cốt lõi đã học

1. **Data Fetching ở Server:**
* Next.js App Router cho phép biến một Component thành hàm `async` để sử dụng `await fetch()`.
* Dữ liệu được lấy trực tiếp tại Server giúp giảm tải JavaScript cho trình duyệt và bảo mật các thông tin nhạy cảm.
* Không cần sử dụng các Hook phức tạp như `useEffect` hay `useState` chỉ để lấy dữ liệu tĩnh.


2. **Hàm `fetch` mở rộng:**
* Next.js mở rộng hàm `fetch` của Web API để hỗ trợ các tùy chọn quản lý bộ nhớ đệm (Cache).
* **`{ cache: 'no-store' }`**: Luôn lấy dữ liệu mới nhất (tương đương Dynamic Rendering).
* **`{ next: { revalidate: 60 } }`**: Tự động làm mới dữ liệu sau mỗi 60 giây (Incremental Static Regeneration).


3. **Loading UI (`loading.tsx`):**
* Đây là file đặc biệt giúp hiển thị giao diện tạm thời (như Spinner hoặc Skeleton) trong khi Server đang xử lý yêu cầu dữ liệu.
* Giúp ứng dụng không bị "đóng băng" và tạo cảm giác phản hồi nhanh cho người dùng.


4. **Luồng dữ liệu (Data Flow):**
* Dữ liệu sau khi fetch ở Server Component sẽ được render thành HTML và gửi xuống trình duyệt. Người dùng sẽ thấy nội dung ngay lập tức mà không cần đợi chạy JavaScript phía Client.



---

### 📂 Cấu trúc thư mục (Day 09)

Cấu trúc thư mục tập trung vào việc quản lý dữ liệu và trạng thái tải:

```
day09/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx      // Trang chi tiết bài viết (Fetch theo ID)
│   │   ├── loading.tsx       // Hiển thị trạng thái chờ cho danh sách bài viết
│   │   └── page.tsx          // Trang danh sách bài viết (Fetch danh sách từ API)
│   └── ...
└── ...

```

---

### 💻 Kết quả đạt được

* Đã tích hợp thành công dữ liệu từ **JSONPlaceholder API** vào ứng dụng.
* Trang **`BlogListPage`** tự động hiển thị danh sách 6 bài viết thật từ Internet.
* Đã xây dựng Component **`Loading`** với hiệu ứng xoay (spinner) bằng Tailwind CSS, tự động kích hoạt khi dữ liệu đang được tải.
* Đã thực hành chuyển đổi tham số từ URL (`params.id`) để fetch dữ liệu chi tiết cho từng bài viết.
