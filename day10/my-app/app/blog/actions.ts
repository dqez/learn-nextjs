'use server';


export async function sendComment(formData: FormData) {
  const message = formData.get('message');

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(">>> Data nhận được tại SERVER:", message);

  return { success: true };
}
