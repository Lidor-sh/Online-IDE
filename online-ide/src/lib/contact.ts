interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactForm = async (data: ContactProps) => {
  try {
    const response = await fetch("/api/email/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
