import React from "react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Bot = () => {
  const [formStatus,setFormStatus]= useState(false)
  return (
    <section>
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <ion-icon name="chatbubble-ellipses" onClick={()=>setFormStatus(!formStatus)}></ion-icon>
    </div>
    {formStatus && <ContactForm key={formStatus} parent={`relative w-full h-screen bg-transparent flex items-center justify-center`} child={`fixed w-[500px] bg-gray-500 p-10 rounded-lg`} overlay={true} />}
    </section>
  );
};

export default Bot;
