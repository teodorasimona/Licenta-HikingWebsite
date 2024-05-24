import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactPage: React.FC = () => {
  // Definim tipul referinței ca fiind HTMLFormElement sau null
  const form = useRef<HTMLFormElement | null>(null);

  // Definim tipul pentru evenimentul e ca fiind FormEvent
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_riids4y",
          "template_16s5pql",
          form.current,
          "FQUyGnGbl8sOYjQBK"
        )
        .then(
          () => {
            console.log("message sent!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="pt-20 h-[100vh] flex items-start justify-center ">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-50 rounded-lg border border-gray-300">
        <div className="flex flex-col items-start w-full md:w-1/2 p-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-start w-full"
          >
            <h1 className="mb-8 text-2xl text-center w-full font-bold">
              Contacteaza-ne
            </h1>
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-white"
            />
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-white"
            />
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md bg-white"
            />
            <input
              type="submit"
              value="Send"
              className="w-full p-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700"
            />
          </form>
        </div>
        <div className="flex items-end justify-end w-full md:w-1/2 ">
          <img
            src="./images/contact-page-ilustratie.png"
            alt="Illustration"
            className="w-full h-auto max-w-none max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
