import React, { useEffect, useState } from 'react'

export default function Images() {
    const [Images, setImages] = useState([
        'https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        'https://images.unsplash.com/photo-1636934432265-7b770c648a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80',
        'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80',
    ])

    function ShowImage() {
        return Images.map((image) => {
            return (
                <div className="w-1/3">
                    <img src={image} alt="error" width="150" />
                </div>
            );
        });
    }

    function handleAdd() {
        setImages(['https://images.unsplash.com/photo-1636937116201-42ddae0e668d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80', ...Images]);
        console.log('image added')
    }

    return (
        <section >
            <div className="flex flex-wrap ">
                <ShowImage />
            </div>
            <div className="flex mt-3 gap-2">
                <input type='text' className="p-2 border border-gray-800 shadow rounded flex" />
                <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
            </div>
        </section>
    )
}