import { create } from 'zustand'
import axios from 'axios'
const noteStore = create((set) => ({
 data: null,

 fetchNotes: async () =>{
    const result = await axios.get('http://localhost:4300/notes')
    set({ data: result.data })
 }

}))

export default noteStore;