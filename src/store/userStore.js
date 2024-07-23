import { create } from 'zustand'
import axios from 'axios'

const userStore = create((set) => ({
    loginform: {
        email: '',
        password: ''
    },

    handleLogin: async (e) => {
        
        const {name,value} = e.target;
        set((state)=> {
            //console.log(state.loginform) // Please note that this console.log always show one value less than the actual input
            return {
                loginform: {
                    ...state.loginform,
                    [name]: value,
                }
            }
        })

    },

    login: async (e) => {
        e.preventDefault();
        const {loginform} = userStore.getState();
        try {
            const res = await axios.post('/login', loginform, {withCredentials: true});
            console.log(res);
            // localStorage.setItem('token', res.data.token);
            // window.location.href = '/notes';
        } catch (error) {
            console.error(error);
        }
    },

}))

export default userStore;