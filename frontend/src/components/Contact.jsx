import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "vickykrsingh27@gmail.com" },
    { logo: "logo-whatsapp", text: "9508896862" },
    {
      logo: "location",
      text: "lalgaj bihar",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white min-h-screen">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-10 flex md:flex-row flex-col
         gap-6 max-w-4xl bg-gray-800 opacity-80 md:p-6 p-2 rounded-lg mx-auto"
        >
          <ContactForm classes="" status="" />
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
