import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Puttest() {

    const [post, setPost] = useState(null)
    const [putData, setPutData] = useState({_id: null,title: '', content: '',})
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
        //console.log(name, value);
        setPutData({...putData, [name]: value})
        //console.log(putData)
    }

    const handleSubmit = (post) =>{
        //e.preventDefault();
        //console.log(post);
        //setPutData({title: post.title, content: post.content, _id: post._id})
        console.log(post)
    }
  return (
    <>
    
    {post && post.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p> <br />
          
     
        </div>
           
))}
     <form action="">
     <label htmlFor='title'>Title</label> &nbsp;
    <input onChange={handleChange} type="text" placeholder="Title" value={putData.title} name="title"/> <br />
    <label htmlFor='title'>Content</label> &nbsp;
    <input type="textarea" onChange={handleChange} placeholder="Content here" value={putData.content} name="content"/> &nbsp;
    {/* Make sure that you put the onClick function inside the anaonoymos function */}
    <button type="submit" value="Submit" onClick={handleSubmit(post)}> Update Note  </button>  
    </form>
    </>
  )
}

export default Puttest