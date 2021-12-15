import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth'
// import useStyles from './styles'



const Profile = () => {
    const [imageUrl, setImageUrl] = useState('')



// THIS IS FOR CLOUDINARY
    const storedToken = localStorage.getItem('authToken')
    const uploadImage = (file) => {
        return axios
            .post("/upload", file, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(res => res.data)
    };


    const handleFileUpload = e => {
        const uploadData = new FormData();
        console.log('uploadData', e.target.files[0])
        uploadData.append("imageUrl", e.target.files[0]);


        
        uploadImage(uploadData)
            .then(response => {
                console.log("inside")
                console.log(response.secure_url)
                setImageUrl(response.secure_url);
            })
            .catch(err => console.log("Error while uploading the file: ", err));
    };

        useEffect(() => {
            // const requestBody = user._id
            // console.log(requestBody)
            console.log(user)
            axios.get('/profile', { headers: { Authorization: `Bearer ${storedToken}` } })
                .then(response => { console.log(response)
                  
                })
                .catch(err => console.log(err))
        }, [])

    const { user } = useContext(AuthContext)
    console.log('user', user)
    if (user === null) return <></> 
    // END OF CLOUDINARY


    return (
        <>    
           <h1> hi {user.name} </h1>
           <h1> Hey there, {user.name}!</h1>

           <input className='file' id="file"
                    type="file"
                    name="imageUrl"
                    onChange={handleFileUpload}>
                </input>

              {/* <img className='box' src={pokemon.imageUrl} /> */}

        </>   
    )
}


export default Profile
