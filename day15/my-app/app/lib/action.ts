"use server";

export async function createInquiry(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  console.log(`Nhập yêu cầu từ: ${name} (${email})`);

}