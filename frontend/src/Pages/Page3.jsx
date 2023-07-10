import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Page3() {

    const [user, setUser] = useState({})


    let id = localStorage.getItem('id')
    console.log(id)

    const getData = async () => {
        try {
            await fetch(`http://localhost:8080/users/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setUser(res)

                    console.log(res)
                })
                .catch((e) => console.log(e))
        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        getData()
    }, [])
    const navigate = useNavigate()


    return (
        <div className='Page_1'>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>PHONE</th>
                    </tr>
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </table>

            <button className='page3_gobak' onClick={() => navigate('/')}>Go Back to Page 1</button>
        </div>
    )
}
