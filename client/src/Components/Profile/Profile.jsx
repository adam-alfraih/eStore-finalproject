import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth'
// import useStyles from './styles'



const Profile = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [wishListItem, setWishListItem] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    const [refreshWishList, setrefreshWishList] = useState(false)

     const[deleteItem, setDeleteItem] = useState('')

    const storedToken = localStorage.getItem('authToken')


    // FOR WISHLIST
    const handleSubmit = (e) => {
        e.preventDefault()
        const requestBody = { wishListItem }
        axios.put(`/wishlist`, requestBody, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
            .then(response => {
                setrefreshWishList(!refreshWishList)
                
            })
    }

        const handleDeleteSubmit = (e) => {
            e.preventDefault(
                console.log('the deleted item', deleteItem)
            )
        }

// THIS IS FOR CLOUDINARY
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

        // THIS IS FOR WISHLIST
        // useEffect(() => {
        //     // const requestBody = user._id
        //     // console.log(requestBody)
        //     console.log(user)
        //     axios.get('/profile', { headers: { Authorization: `Bearer ${storedToken}` } })
        //         .then(response => { console.log(response)
                  
        //         })
        //         .catch(err => console.log(err))
        // }, [refreshWishList])
         //END OF WISHLIST



    const { user } = useContext(AuthContext)
    console.log('user', user)
    // END OF CLOUDINARY
    
    useEffect(() => {
        axios.get('/profile', { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(response => {
            console.log('this is the data', response.data)
            setCurrentUser(response.data)
        })
    }, [refreshWishList])


    if (currentUser === '') return <></> 

    return (
        <>    
           <h1> hi {currentUser.name} </h1>
           <h1> Hey there, {currentUser.name}!</h1>
    

           <input className='file' id="file"
                    type="file"
                    name="imageUrl"
                    onChange={handleFileUpload}>
                </input>



                {/* this is for WISHLIST */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Wishlist Item: </label>
                <input
                    id="title"
                    type="text"
                    value={wishListItem}
                    // name="title"
                    onChange={e => setWishListItem(e.target.value)}
                />
                <button type="submit">Add this project</button>
            </form>


          
                {currentUser.wishlist.map(item => {
                    return (
                        <form onSubmit={handleDeleteSubmit}>
                            {item}
                            <button type="submit" onClick={e => setDeleteItem({item})}>Delete</button>
                        </form>

                        
                    )
                })}
            

              {/* <img className='box' src={pokemon.imageUrl} /> */}

        </>   
    )
}


export default Profile
