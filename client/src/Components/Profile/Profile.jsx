import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth'

// import useStyles from './styles'

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log('user', user)
    if (user === null) return <></> 
    return (
        <>    
           <h1> hi {user.name} </h1>
           <h1> Hey there, {user.name}!</h1>
        </>   
    )
}


export default Profile
