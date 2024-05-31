"use client"
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function Form() {
 
    const [formData, setFormData] = useState({title: '' });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
        e.preventDefault();
        if(!formData.title){
          return alert("Plese All Fields Are Requiered ")
        }
        const response= await fetch('https://task-backend-7gl4.onrender.com/create', {
          method: 'POST',
          body: JSON.stringify({
            title:formData.title,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);
      router.push('/')
      };
   
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
      <input className="input-title"
      placeholder="Type Title Of Your Task"
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({  ...formData,title: e.target.value })}
      />
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
