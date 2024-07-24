import { create } from 'zustand'
import axios from 'axios'

const userStore = create((set) => ({
    loginform: {
        email: '',
        password: ''
    },
    loggedIn: false,

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

    login: async () => {
        //e.preventDefault();
        const {loginform} = userStore.getState();
        try {
            const res = await axios.post('/login', loginform, {withCredentials: true});
            console.log(res);
            set({loggedIn: true})
            // localStorage.setItem('token', res.data.token);
            // window.location.href = '/notes';
        } catch (error) {
            console.error(error);
        }
    },
    
    checkAuth: async() => {
        try {
            const res = await axios.get('/checkauth', {withCredentials: true});
            console.log(res);
            set({loggedIn: true})
        } catch (error) {
            set({loggedIn: false})
            console.error(error);
        }

    },

}))

export default userStore;