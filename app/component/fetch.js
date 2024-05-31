"use client"
import { useState,useEffect } from "react";
import ButtonDelete from "./buttonDelete";
import ButtonDone from "./buttonDone";




export default function Fetch(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async () => {
    const response= await fetch('https://task-backend-7gl4.onrender.com/tasks', {
      next: {revalidate: 60}
  });
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setData(result)
  }
    return (
    <div className="content">
      <div className="div-title">
        <p className="title">My Tasks</p>
        <hr />
      </div>
      {data.map(item=><>
        <div className="tasks">
        <div>
        <p>{item.title}</p>
        </div>
       <div>
        <ButtonDone item={item}/>
       </div>
        <ButtonDelete id={item.id}/>
      </div>
      <hr />
      </>
      )}
      
    </div>
    )

}

/*        const response= await fetch(url,{
        next: {revalidate: 60}
    });
    const result= await response.json();
    
    
    return result*/

/*  const [data,setData]= useState({});
    const get=async()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users',{
        next: {revalidate:1}
    });
    const result= await response.json();
    setData(result);
    }
    useEffect( () =>{
        get()
    },[]); */
/*
    return(
      <div className="md:w-2/4">
    <h4>Name: </h4>
      <h4 >Age: </h4>
      <h4 >Email: </h4>
      <div>
        <h4 className="border-2 rounded-lg bg-red-200 ">Personal And Profiessinoal Achievements:</h4>
        {result.map(i=>
          <><li className="font-semibold ">title: {i.name}</li>
          <li>Discription: {i.name}</li></>
        )}
      </div>
  </div>
  );*/