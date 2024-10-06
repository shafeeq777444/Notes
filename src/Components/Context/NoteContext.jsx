import React, { createContext, useEffect } from "react";
import axios from "axios";

export const NoteContext = createContext();
export const ProviderContext = ({ children }) => {
  useEffect(()=>{
    // console.log("the context initial render")
  },[])
  // console.log("extra render in context")
    const posting = async (noteObject) => {
        console.log(noteObject, "parameter checking");
        try {
            const response = await axios.post("http://localhost:9000/notes", {...noteObject});
            // console.log(response.data, "posting");
        } catch (error) {
            console.log(error);
        }
    };
    const remove = async (id) => {
      console.log(id, "parameter checking");
      try {
          const response = await axios.delete(`http://localhost:9000/notes/${id}`);
          console.log(response.data, "deleting");
      } catch (error) {
          console.log(error);
      }
  };
  const edit=async(id,editableNote)=>{
     const response=await axios.patch(`http://localhost:9000/notes/${id}`,editableNote)
    console.log(response.data,"updated");
  }

    return (
        <>
            
            <NoteContext.Provider
                value={{
                    posting,
                    remove,
                    edit
                }}
            >
                {children}
            </NoteContext.Provider>
        </>
    );
};
