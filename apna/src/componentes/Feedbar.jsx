import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import axios from 'axios';
import { toast } from 'react-toastify'
// import { useAuth0 } from '@auth0/auth0-react';

const Feedbar = () => {
    const [adminName, setAdminName] = useState('');
    const [comment, setComment] = useState('')


    const handleFeedBack = (e) => {
        e.preventDefault();
        if (comment !== "" && adminName !== "") {
            axios.post('http://localhost:5000/add', {
                comment, adminName
            })
                .then((result) => console.log(result))
                .catch((error) => console.log(error))
            toast.success('🦄 Thanks for giving your feedback!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('🦄 Please fill in both feedback and name fields!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setComment('')
        setAdminName('')
    }
    return (
        <>
            <div className="feeb_text">
                <h2>Comment-Section</h2>
            </div>
            <div className='task_container'>
                <form onSubmit={handleFeedBack}>

                    <input type="text"
                        placeholder='Admin Name😊😊😊'
                        onChange={(e) => setAdminName(e.target.value)}
                        value={adminName}

                    />

                    <textarea type="text"
                        placeholder='Plese Enter your Comment✋🖐️🖐️'
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    <button>
                        <AiOutlineSend className='icon' />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Feedbar