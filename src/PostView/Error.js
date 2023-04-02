import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='form'>
     SOORY... we cant react this page 
     <div>
        <Link to="/">
     <button>Go To Home</button></Link>
    </div>
    </div>

  )
}

export default Error
