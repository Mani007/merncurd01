import React,{useState, useEffect} from 'react'
import axios from 'axios'
import noteStore from '../store/noteStore'
function Puttest() {
    const store = noteStore();

    //const [post, setPost] = useState(null)
    //const [putData, setPutData] = useState({_id: null ,title: '', content: '',})
    // const getdata = async ()=>{
    //         //e.preventDefault()
    //         const result = await axios.get('http://localhost:4300/notes') // special property used got get request
    //         .then(result => setPost(result.data))
    //         //.then(()=> console.log(result))
    //         .catch(err => console.log(err))
    // }

    useEffect(()=>{
        //fetch data from API
        store.fetchNotes()
    }, [])
    // const handleChange = (event) => {
    //     event.preventDefault()
    //     const {name, value} = event.target
    //     //console.log(name, value);
    //     setPutData({...putData, [name]: value})
    //     //console.log(putData)
    // }

    // const handleUpdate = (note) =>{
    //     //e.preventDefault();
    //     //console.log(post);
    //     setPutData({title: note.title, content: note.content, _id: note._id})
    //     console.log(note)   // this is perfectly working now
    // }

    // const handleSubmit = async(_id) => {

    //     await axios.put(`http://localhost:4300/notes/${putData._id}`, putData)
    //    //.then(res => console.log(res.data))
    // }

  return (
    <>
    
    {store.data && store.data.map(note => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p> <br />
          <button type="submit" value="Submit" onClick={() => store.handleUpdateData(note)}> Update Note  </button> 
        </div>
           
))}
 
 {store.putdata._id && (<form >
     <label>Title</label> &nbsp;
    <input onChange={store.handleChangeUpdate} type="text" placeholder="Title" value={store.putdata.title} name="title"/> <br />
    <label htmlFor='title'>Content</label> &nbsp;
    <input type="textarea" onChange={store.handleChangeUpdate} placeholder="Content here" value={store.putdata.content} name="content"/> &nbsp;
    <button type="submit" value="Submit" onClick={() => store.handleSubmitUpdate(store.putdata._id)}> Submit update  </button> 
    {/* Make sure that you put the onClick function inside the anaonoymos function */}
    
    </form>
 )}
    
    </>
  )
}

export default Puttest