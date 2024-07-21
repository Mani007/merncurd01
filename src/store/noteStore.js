import { create } from 'zustand'
import axios from 'axios'
const noteStore = create((set) => ({
 data: null,
createForm: {
    title: '',
    content: ''
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


}))

export default noteStore;