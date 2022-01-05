import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthConfig from '../config/firebase';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    function handleForm(e) {
        if (isLoading) return null;
        setIsLoading(true);
        e.preventDefault();
        const auth = getAuth(firebaseAuthConfig);
        signInWithEmailAndPassword(auth, 'admin@gmail.com', '123456')
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(userCredential.user);
                setIsLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log([errorCode, errorMessage])
                setIsLoading(false);
            });
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg bg-gradient-to-br from-indigo-900 to-indigo-700">
                <form className='m-5 w-10/12' onSubmit={handleForm}>
                    <h1 className='w-full text-4xl tracking-widest text-center my-6'>
                        Login
                    </h1>
                    <div className='w-full my-6'>
                        <input type='email' name='email' className='p-2 rounded shadow w-full placeholder-gray-700 text-gray-900' placeholder='Email or Username' />
                    </div>
                    <div className='w-full my-6'>
                        <input type='password' name='password' className='p-2 rounded shadow w-full placeholder-gray-700 text-gray-900' placeholder='Password' />
                    </div>
                    <div className='w-full my-6'>
                        <button type='submit' className='bg-yellow-600 w-full p-2 rounded'>
                            {
                                isLoading ?
                                    <i className='fas fa-circle-notch fa-spin'></i>
                                    :
                                    'Login'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
