import React from "react";
import { useEffect } from "react";

function ContactForm({ parent , child , overlay }) {
    overlay && useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
  return (
    <div className={`${overlay ? parent : ""}`}>
      <form className={`flex flex-col flex-1 gap-3 ${overlay ? child : ""}`}>
        <input type="text" placeholder="Your Name" />
        <input type="Email" placeholder="Your Email Address" />
        <textarea placeholder="Your Message" rows={6}></textarea>
        <button className="btn-primary w-fit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
