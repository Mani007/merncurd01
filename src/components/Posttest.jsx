import axios from 'axios';
import React,{useState,useEffect} from 'react'

function Posttest() {
    const [post, setPost] = useState({title: '', content: ''});
    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post("http://localhost:4300/notes",{...post})
        //console.log(res);
        setPost({title: '', content: ''}); // making textarea empty
    }

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        //console.log(name, value); 
        //console.log(post); // for debugging purpose only  // remove this line when you are done debugging.  // console.log(event.target.name, event.target.value);  // remove this line when you are done debugging.  // console.log(post);  // for debugging purpose only  // remove this line when you are done debugging.  // console.log(event.target.value);  // for debugging purpose only  // remove
        setPost({...post, [name]: value });
        //setPost({title: '', content: ''});
    }

  return (
    <>
     <h1>Post form</h1> <br />
    <form>
    <label htmlFor='title'>Title</label> 
    <input onChange={handleChange} type="text" placeholder="Title" value={post.title} name="title"/> <br />
    <label htmlFor='title'>Content</label> 
    <input type="textarea" onChange={handleChange} placeholder="Content here" value={post.content} name="content"/> &nbsp;
    <button type="submit" value="Submit" onClick={handleSubmit}> On Submit </button>   
    </form>    
     </>
  )
}

export default Posttest