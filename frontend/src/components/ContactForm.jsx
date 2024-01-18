import React from "react";
import { useEffect,useState } from "react";
import {toast} from "react-hot-toast";

function ContactForm({ parent , child , overlay }) {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })
  
    overlay && useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);
    const formSubmitHandler = (e) => {
      e.preventDefault()
      toast.success("Query submitted successfully")
      setFormData({
        name:"",
        email:"",
        message:""
      })
    }
    
  return (
    <div className={`${overlay ? parent : "flex flex-col flex-1 gap-3"}`}>
      <form onSubmit={(e)=>formSubmitHandler(e)} className={`flex flex-col flex-1 gap-3 ${overlay ? child : ""}`}>
        <input onChange={(e)=>setFormData({...formData,name:e.target.value})} value={formData.name} type="text" required placeholder="Your Name" />
        <input onChange={(e)=>setFormData({...formData,email:e.target.value})} value={formData.email} type="Email" required placeholder="Your Email Address" />
        <textarea onChange={(e)=>setFormData({...formData,message:e.target.value})} value={formData.message} placeholder="Your Message" required rows={6}></textarea>
        <button className="btn-primary !w-full !lg:w-fit !flex !items-center !justify-center !py-3">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
