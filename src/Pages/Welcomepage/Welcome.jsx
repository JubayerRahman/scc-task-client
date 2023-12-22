import React, { useContext } from 'react'
import { AuthContent } from '../../Authprovider/AuthProvider'

const Welcome = () => {
  const {user} = useContext(AuthContent)
  return (
    <div className='flex h-screen flex-col justify-center items-center gap-3'>
      <h1 className='text-3xl font-[500]'>Welcome {user?.displayName} to your dashboard.</h1>
      <p>Expleore tasks, and make yours.</p>
    </div>
  )
}

export default Welcome
