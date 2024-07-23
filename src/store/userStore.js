import { create } from 'zustand'
import axios from 'axios'

const userStore = create((set) => ({
    loginform: {
        email: '',
        password: ''
    },

    handleLogin: async (e) => {
        e.preventDefault();
        const {name,value} = e.target;
        set((state)=> {
            console.log(state.loginform)
            return {
                loginform: {
                    ...state.loginform,
                    [name]: value,
                }
            }
        })

    },

}))

export default userStore;