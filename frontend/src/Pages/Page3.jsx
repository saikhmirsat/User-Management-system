import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Page3.css'


export default function Page3() {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    let id = localStorage.getItem('id')
    console.log(id)

    const getData = async () => {
        setLoading(true)
        try {
            await fetch(`https://troubled-outfit-bat.cyclic.app/users/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setLoading(false)
                    setUser(res)
                    console.log(res)
                })
                .catch((e) => console.log(e))
        } catch (e) {
            setLoading(false)
            console.log(e)
        }

    }
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()


    return (
        <div className='Page_3'>
            {
                loading ? <img className='loading_img' src="https://media.tenor.com/YPOStjIfQ2IAAAAC/loading-waiting.gif" alt="" /> :
                    <div>

                        <div className='page3_chil1'>
                            <img src={user.avatar} alt="" />

                        </div>

                        <div className='page3_chil2'>
                            <div>
                                <h3>ID : {user._id}</h3>
                                <h3>Name : {user.name}</h3>
                                <h3>Email : {user.email}</h3>
                                <h3>Phone : {user.phone}</h3>
                            </div>
                        </div>
                    </div>
            }


            <button className='page3_gobak' onClick={() => navigate('/')}>Go Back to Page 1</button>
        </div>
    )
}
