import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from './Context/NoteContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const HomePage = () => {
  const navigate=useNavigate();
  


  const { handleDelete, newNote,remove } = useContext(NoteContext);
  const [fetchState,setFetchState]=useState([])
  useEffect(()=>{
    const fetching=async()=>{
      const response=await axios.get("http://localhost:9000/notes")
      console.log(response.data,"fethcing");
      setFetchState(response.data)
      
      
  }
  fetching()
},[])
  return (
   <>
   <Link to='/createNote'>📝</Link> 
   {fetchState.map((x,ind)=><div style={{backgroundColor:x.color}} key={ind}>
    <h2>{x.title}</h2>
    <p>{x.description}</p>
    <button onClick={()=>{remove(x.id);setFetchState(pre=>pre.filter(p=>p.id!=x.id))}}>x</button>
    <button onClick={()=>navigate(`/edit/${x.id}`)}>edit</button>
   </div>)}
      
    </>
  );
};

export default HomePage;
