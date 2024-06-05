import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};

const generateEmailContent = (data: ContactProps) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    str += `${capitalizeFirstLetter(key)}: \n${val} \n \n`;
    return str;
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    str += `<h1 style="font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; margin: 0 0 8px; padding: 0; color: #2a2a2a;">${capitalizeFirstLetter(
      key
    )}:</h1><p style="font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; margin: 0 0 24px; padding: 0; color: #2a2a2a;">${val}</p>`;
    return str;
  }, "");

  const respondButton = `
    <a href="mailto:${data.email}?subject=RE:${encodeURIComponent(
    data.subject
  )}&body=${encodeURIComponent(
    `Your response here.\n\n---------------------------------------------------------\n\n${data.name}'s message:\n ${data.message}`
  )}" style="background-color: #FFA73B; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Respond to this contact</a>
  `;

  return {
    text: stringData,
    html: `<body style="margin: 0 !important; padding: 0 !important; background: #f4f4f4;"><table width="100%"><div style="padding: 40px 10px;background:#FFA73B;"></div><tr><td align="center" style="background:#FFA73B;padding: 0px 10px;"><table width="100%" style="max-width: 900px;"><tr><td style="background: #fff; padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px; text-align: center;"><h1 style="font-size: 48px; font-weight: 400; margin: 2;">New Contact Message</h1><img src="https://i.imgur.com/TBDjgY7.png" style="width: 125px; height: 120px;"></td></tr></table></td></tr><tr><td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px;"><table width="100%" style="max-width: 900px;"><tr><td align="left" style="background: #fff; text-align: left; padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">${htmlData}<p>${respondButton}</p></td></tr></table></td></tr></table></body>`,
  };
};

const contactHandler = async (req: NextRequest) => {
  if (req.method !== "POST")
    return NextResponse.json({ message: "Bad request" }, { status: 400 });

  const data = await req.json();
  if (!data.name || !data.email || !data.subject || !data.message)
    return NextResponse.json({ message: "Bad request" }, { status: 400 });

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "Message from " + data.name,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
};

export { contactHandler as POST };
