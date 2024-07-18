import axios from 'axios'
import React, {useState,useEffect} from 'react'

// In order to delete the note, we need to get the _id first for deletion of appropriate note
function Deletetest() {
    const [deletest, setDeletest] = useState(null)
    const fetchData = async ()=>{
        //e.preventDefault()
        const result = await axios.get('http://localhost:4300/notes') // special property used got get request
        .then(result => setDeletest(result.data))
        //.then(()=> console.log(result))
        .catch(err => console.log(err))
        //setDeletest(result.data); 
    }
    useEffect( ()=> {
        fetchData()
    }
    ,[])
    

    const handleDelete = async(_id) =>{
        //e.preventDefault()
        // delete the note
        await axios.delete(`http://localhost:4300/notes/${_id}`)
        .then(response => {
            console.log("The note has been deleted")
        })
        // update the state 
    }
  return (
    <>
        <div>
        {deletest && deletest.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p> <br />
          <button onClick={() => handleDelete(note._id)}>Delete Note with ID {note._id}</button>
        </div>
      ))}
            
        </div>   
    </>
  )
}

export default Deletetest