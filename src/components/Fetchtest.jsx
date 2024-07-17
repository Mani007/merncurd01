import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Fetchtest() {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:4300/notes')
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    }, [])
  return (
    <div>
      {data && data.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Fetchtest