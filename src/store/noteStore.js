import { create } from 'zustand'
import axios from 'axios'
const noteStore = create((set) => ({
 data: null,
 createForm: {
    title: '',
    content: ''
   },
 putdata: {
    title: '',
    content: '',
    _id: null,
 },
 

 fetchNotes: async () =>{
    const result = await axios.get('http://localhost:4300/notes')
    set({ data: result.data })
 },

 handleChange: (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    //console.log(name, value); 
    //console.log(post); // for debugging purpose only  // remove this line when you are done debugging.  // console.log(event.target.name, event.target.value);  // remove this line when you are done debugging.  // console.log(post);  // for debugging purpose only  // remove this line when you are done debugging.  // console.log(event.target.value);  // for debugging purpose only  // remove
    //setPost({...post, [name]: value });
    //setPost({title: '', content: ''});
    set((state)=> {
        return {
            createForm: {
                ...state.createForm,
                [name]: value,
            }
        }
    })
}, 

handleSubmit: async (event) => {
    event.preventDefault();
    const {createForm, data} = noteStore.getState()
    const res = await axios.post("http://localhost:4300/notes",{...createForm})
    //console.log(res);
    //setPost({title: '', content: ''}); // making textarea empty
    set({
        data: [...data, res.data],
        createForm: {
            title: '',
            content: '',
        }
    })
},

handleDelete: async(_id) =>{
    //e.preventDefault()
    // delete the note
    await axios.delete(`http://localhost:4300/notes/${_id}`)
    // .then(response => {
    //     console.log("The note has been deleted")
    // })
    const {data} = noteStore.getState()
    // update the state 
    //setDeletest({...Deletetest})
    const newNote = data.filter((note)=>{
        return note._id !== _id
    })
    set({
        data: newNote
       
    })
},

handleChangeUpdate: (event) => {
    event.preventDefault()
    const {name, value} = event.target
    //console.log(name, value);
    //setPutData({...putData, [name]: value})
    //console.log(putData)
    set((state)=> {
        return {
            putdata: {
                ...state.putdata,
                [name]: value,
            }
        }
    })
},

handleUpdateData: (note) =>{
    //e.preventDefault();
    //console.log(post);
    //setPutData({title: note.title, content: note.content, _id: note._id})
    //console.log(note)   // this is perfectly working now
    const {_id, title, content} = note
    set({
        putdata: {
            title,
            content,
            _id,
        }
    })
},




}))

export default noteStore;