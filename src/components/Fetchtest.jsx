import React, {useState, useEffect} from 'react'
import axios from 'axios'
import noteStore from '../store/noteStore'

function Fetchtest() {
    const store = noteStore();
    //const [data, setData] = useState(null)
    useEffect(() => {
       store.fetchNotes()
    }, [])

    // const fetchnotes = async () =>{
    //     const result = await axios.get('http://localhost:4300/notes')
    //     //console.log(result)
    //     .then(res => setData(res.data))
    //     //.then(()=> console.log(result))
    //     .catch(err => console.log(err))
        
    // }
  return (
    <div>
        {/* //if data is available and then map it */}
      {store.data && store.data.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Fetchtest