import { create } from 'zustand'
import axios from 'axios'

const userStore = create((set) => ({
    loginform: {
        email: '',
        password: ''
    },
    signup: {
        email: '',
        password: '',
        password2: ''
    },
    loggedIn: false,
    handlesignup: async(e) => {
        
        const {name,value} = e.target;
        set((state)=> {
            //console.log(state.loginform) // Please note that this console.log always show one value less than the actual input
            return {
                signup: {
                    ...state.signup,
                    [name]: value,
                }
            }
        })
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
    
    signupcall: async () => {
        //e.preventDefault();
        const {signup} = userStore.getState();
        try {
            const res = await axios.post('/signup', signup, );
            console.log(res);
            set({
                signup: {
                    email: '',
                    password: '',
                    password2: ''
                },
            })
            // localStorage.setItem('token', res.data.token);
            // window.location.href = '/notes';
        } catch (error) {
            console.error(error);
        }
    },

    login: async () => {
        //e.preventDefault();
        const {loginform} = userStore.getState();
        try {
            const res = await axios.post('/login', loginform, );
            console.log(res);
            set({loggedIn: true, loginform:{
                email: '',
                password: ''
            }}, )
            // localStorage.setItem('token', res.data.token);
            // window.location.href = '/notes';
        } catch (error) {
            console.error(error);
        }
    },
    
    checkAuth: async() => {
        try {
            const res = await axios.get('/checkauth', );
            //console.log(res);
            set({loggedIn: true})
        } catch (error) {
            set({loggedIn: false})
            console.error(error);
        }

    },
    logout: async() => {
        try {
            await axios.get('/logout', );
            set({loggedIn: false})
            console.log('Logged out')
        } catch (error) {
            console.error(error);
        }
    },

}))

export default userStore;