## 📅 Day 11: Backend - Route Handlers

### 🎯 Mục tiêu

* **Nắm vững Route Handlers:** Hiểu cách tạo API Endpoint trong thư mục `app/api`.
* **Xử lý HTTP Methods:** Thực thi các phương thức GET và POST để giao tiếp dữ liệu.
* **Modern Next.js (v15/16):** Làm quen với việc xử lý `params` và `searchParams` dưới dạng **Promise**.

---

### 📝 Kiến thức cốt lõi đã học

1. **Cấu trúc thư mục API:**
* File `route.ts` định nghĩa một endpoint. Tên thư mục cha chính là đường dẫn URL (Ví dụ: `app/api/user/route.ts` -> `/api/user`).
* Khác với .NET Controller, Next.js tách biệt các route theo cấu trúc cây thư mục.


2. **Xử lý GET & POST:**
* **GET:** Dùng để lấy dữ liệu, trả về thông qua `NextResponse.json()`.
* **POST:** Dùng để nhận dữ liệu từ body của request bằng `await request.json()`.


3. **Async Params (Next.js 15/16 Standard):**
* Các tham số dynamic như `params` trong Route Handlers hiện nay là **Promise**.
* Phải sử dụng `const { slug } = await params;` thay vì truy cập trực tiếp để tránh lỗi đồng bộ.


4. **So sánh với .NET:**
* `NextResponse.json(data)` tương đương với `return Ok(data)`.
* `params` tương đương với `[FromRoute]`, còn `searchParams` tương đương với `[FromQuery]`.



---

### 📂 Cấu trúc thư mục (Day 11)

Cấu trúc thư mục tập trung vào bài học hôm nay:

```text
app/
├── api/
│   ├── route.ts
│   ├── users/
│   │   └── route.ts         # GET/POST ví dụ cơ bản
│   ├── info/
│   │   └── route.ts         # GET/POST ví dụ cơ bản
│   |   └── [id]/
│           └── route.ts     # Dynamic API (Async Params)
│   └── products/
│       └── [slug]/
│           └── route.ts     # Dynamic API (Async Params)

```

---

### 💻 Kết quả đạt được

* Tạo được API Endpoint trả về dữ liệu JSON.
* Xử lý thành công dữ liệu gửi lên từ phía Client (Postman/Fetch) qua phương thức POST.
* Triển khai Dynamic API Route hỗ trợ lấy tham số từ URL một cách bất đồng bộ theo chuẩn Next.js mới nhất.
