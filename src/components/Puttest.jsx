import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Puttest() {

    const [post, setPost] = useState(null)
    const [putData, setPutData] = useState(null)
    const getdata = async ()=>{
            //e.preventDefault()
            const result = await axios.get('http://localhost:4300/notes') // special property used got get request
            .then(result => setPost(result.data))
            //.then(()=> console.log(result))
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        //fetch data from API
        getdata()
    }, [])
    const handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        console.log(name, value);
        setPutData({...putData, [name]: value})
        console.log(putData)
    }

    const handleSubmit = () =>{

    }
  return (
    <>
    <div>
    {post && post.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p> <br />
          <h1>Update form with put</h1> <br />
    <form>
    <label htmlFor='title'>Title</label> 
    <input onChange={handleChange} type="text" placeholder="Title" value={post.title} name="title"/> <br />
    <label htmlFor='title'>Content</label> 
    <input type="textarea" onChange={handleChange} placeholder="Content here" value={post.content} name="content"/> &nbsp;
    <button type="submit" value="Submit" onClick={handleSubmit}> Update Note </button>   
    </form>  
        </div>
))}
    </div>
    
    </>
  )
}

export default Puttest