import React from 'react'

export default function Login() {
    function handleForm(e) {
        console.log('form submitted');
    }

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg bg-gradient-to-br from-indigo-900 to-indigo-700 ">
                <form className='m-5 w-10/12' onSubmit={handleForm()}>
                    <h1 className='w-ful text-4xl tracking-widest text-center my-6'>
                        Login
                    </h1>
                    <div className='w-full my-6'>
                        <input type='email' name='email' className='p-2 rounded shadow w-full placeholder-gray-700 text-gray-900' placeholder='Email or Username' />
                    </div>
                    <div className='w-full my-6'>
                        <input type='password' name='password' className='p-2 rounded shadow w-full placeholder-gray-700 text-gray-900' placeholder='Password' />
                    </div>
                    <div className='w-full my-6'>
                        <button className='' type='submit' className='p-2 rounded shadow w-full bg-gradient-to-r from-yellow-900 to-yellow-400'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
