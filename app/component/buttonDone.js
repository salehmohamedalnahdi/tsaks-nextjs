"use client"

import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function ButtonDone({item}) {
 
    const id=item.id
    const title=item.title
    const router = useRouter();
    const handleSubmit= async(e) => {;
        e.preventDefault();
        const response= await fetch('https://task-backend-7gl4.onrender.com/update/'+id, {
            method: 'PATCH',
            body: JSON.stringify({
              title: title,
              isDone:true
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
        const result= await response.json();
        console.log(result);
        window.location.reload()
      };
   
  return (
    <div className='isDone'>
    {item.isDone ? <FaCheckCircle className='true'/> : <button onClick={handleSubmit}>
        <FaRegCircle /> 
      </button>
    }
  </div>
  );
}
