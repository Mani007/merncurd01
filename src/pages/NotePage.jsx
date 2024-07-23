import React from 'react'
import Fetchtest from '../components/Fetchtest'
import Posttest from '../components/Posttest'
import Deletetest from '../components/Deletetest'
import Puttest from '../components/Puttest'

function NotePage() {
  return (
    <>
    <Fetchtest/>
    <Posttest/> 
     <Deletetest/>
    <Puttest/>
    </>
  )
}

export default NotePage