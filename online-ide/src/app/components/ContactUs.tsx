import Heading from "./Heading";
import Section from "./Section";
import Wave from "./Wave";
import contactImage from "../images/contact.png";
import Image from "next/image";
import { useState } from "react";
import { sendContactForm } from "@/lib/contact";
import toast from "react-hot-toast";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initData = {
  values: initValues,
};

const ContactUs = () => {
  const [data, setData] = useState(initData);

  const { values } = data;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendContactForm(values);
      setData(initData);
      toast.success("Email sent");
    } catch (e: any) {
      console.error("hello");
      toast.error(e.message);
    }
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <Section>
      <Wave className="blacktheme" />
      <div className="container-section mt-[6rem] relative z-2">
        <Heading
          className="text-blacktheme font-mono md:max-w-md lg:max-w-2xl justify-center text-center"
          title="Contact Us"
        />
        <div className="flex items-center gap-[10rem]">
          <div className="hidden lg:flex flex-1 relative h-[35rem] -top-8">
            <Image src={contactImage} alt="" fill className="object-contain" />
          </div>
          <div className="flex-1">
            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="p-5 font-mono font-bold border-none outline-none rounded-lg bg-blacktheme placeholder-slate-400 text-whitetheme"
                value={values.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-5 font-mono font-bold border-none outline-none rounded-lg border-[5px] bg-blacktheme placeholder-slate-400 text-whitetheme"
                value={values.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="p-5 font-mono font-bold border-none outline-none rounded-lg border-[5px] bg-blacktheme placeholder-slate-400 text-whitetheme"
                value={values.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Message"
                className="p-5 max-h-96 min-h-20 font-mono font-bold border-none outline-none rounded-lg border-[5px] bg-blacktheme placeholder-slate-400 text-whitetheme"
                value={values.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="p-5 bg-middletheme text-whitetheme font-bold border-none rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
