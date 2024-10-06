import React, { useContext, useEffect } from 'react';
import './CreateNote.css';
import { NoteContext } from './Context/NoteContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';
const CreateNote = () => {
  const {id}=useParams();
  const { posting,edit} = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#ffffff');
  const noteObject={title,description,color}

  useEffect(()=>{
    if (id){
      const fetchEditing=async()=>{
        const response=await axios.get(`http://localhost:9000/notes/${id}`)
        // console.log(response.data,"edit fetching")
        const editingData=response.data
        setTitle(editingData.title)
        setDescription(editingData.description)
        setColor(editingData.color)


      }
      fetchEditing();
    }
    
  },[])
 
const Navigate=useNavigate();
  return (
    <div>
      <form onSubmit={(e) => { 
        e.preventDefault();
        if(id){
          edit(id,noteObject)
          }
          else{
            posting(noteObject)
          } 
          Navigate('/')}}> 
        <div className="CreateNote-main-div" style={{ backgroundColor: color }}>
          <div className="createNote-title">
            <label htmlFor='title'>Title: </label>
            <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <textarea rows={18} cols={100} name='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <input name='color' type='color' value={color} onChange={(e) => setColor(e.target.value)} />
          <button type='submit'>save</button>
          <button onClick={()=>Navigate('/')} >BacktoHome</button>

        </div>
      </form>
    </div>
  );
};

export default CreateNote;
