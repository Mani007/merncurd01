import React, { useEffect } from 'react'
import userStore from '../store/userStore'

function Logoutpage() {
    const store = userStore()
    useEffect(() =>
       store.logout
    ,[])
  return (
   <>
   <h1>you have been logout successfully</h1>
   </>
  )
}

export default Logoutpage