import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValueContext } from '../Context/ValueContext';

export default function Page2() {

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [avatar, setAvatar] = useState('')

    const navigate = useNavigate()

    const { isUpdate, setIsUpdate } = useContext(ValueContext)

    const updateID = localStorage.getItem('id')


    const AddUser = async () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('upload_preset', 'userManagementSystem');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/drijzhqfp/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        const obj = {
            name,
            email,
            phone,
            avatar: data.secure_url
        }
        console.log(obj)

        await fetch('https://troubled-outfit-bat.cyclic.app/users/add', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((res) => {
                alert(res.msg)
                setLoading(false)
                navigate('/')
            })
            .catch((e) => {
                alert(e)
                setLoading(false)
                console.log(e)
            })


    }

    const UpdateFunc = async () => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', avatar);
        formData.append('upload_preset', 'userManagementSystem');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/drijzhqfp/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        let user = JSON.parse(localStorage.getItem('user'))

        const obj = {
            name: name || user.name,
            email: email || user.email,
            phone: phone || user.phone,
            avatar: data.secure_url || user.avatar
        }

        await fetch(`https://troubled-outfit-bat.cyclic.app/users/edit/${updateID}`, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((res) => {
                alert(res.msg)
                setLoading(false)
                navigate('/')
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })

    }

    return (
        <div>
            <div className='Page_2'>
                <div>
                    <button onClick={() => setIsUpdate(false)} className={!isUpdate ? "Btn_background_change_false" : ""}>Create User</button><button onClick={() => setIsUpdate(true)} className={isUpdate ? "Btn_background_change_true" : ""}>Update User</button>
                </div>
                <h4>{isUpdate ? 'Update User' : 'Create User'}</h4>

                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                <input type="file" placeholder='Avatar' onChange={(e) => setAvatar(e.target.files[0])} />

                <button className='page2_submit_btn' onClick={isUpdate ? UpdateFunc : AddUser}>{isUpdate ? loading ? <img className='loading_img_page_2_btn' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" /> : 'Update User' : loading ? <img className='loading_img_page_2_btn' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" /> : 'Create User'}</button>

            </div>
            <span>Click here to</span> <button className='Page2_goBack' onClick={() => navigate('/')}>goBack</button>
        </div>
    )
}
