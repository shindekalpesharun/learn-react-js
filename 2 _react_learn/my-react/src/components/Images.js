import React, { useEffect, useState } from 'react'

export default function Images() {
    const [Images, setImages] = useState([
        'https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        'https://images.unsplash.com/photo-1636934432265-7b770c648a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80',
        'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80',
    ])

    const [newImageUrl, setNewImageUrl] = useState("")

    function ShowImage() {
        return Images.map((image, index) => {
            return (
                <div className="w-1/3 my-4 flex justify-center" key={index}>
                    <div className='relative'>
                        <i className='fas fa-times absolute right-0 cursor-pointer text-gray-200 opacity-25 hover:opacity-100' onClick={() => handlRemove(index)}></i>
                        <img src={image} alt="error" width="150" />
                    </div>
                </div>
            );
        });
    }

    function handlRemove(index) {
        // setImages(Images.filter((Images, i) => i != index));
        setImages([...Images.slice(0, index), ...Images.slice(index + 1, Images.length)])
    }

    function handleAdd() {
        if (newImageUrl != "") {
            setImages([newImageUrl, ...Images]);
            setNewImageUrl("");
        }
    }

    function handleChange(event) {
        setNewImageUrl(event.target.value);
    }

    return (
        <section >
            <div className="flex flex-wrap ">
                <ShowImage />
            </div>
            <div className="flex mt-3 gap-2">
                <input
                    type='text'
                    className=" w-full border border-gray-800 shadow rounded flex"
                    value={newImageUrl}
                    onChange={handleChange}
                />
                <button
                    className={`text-white ${newImageUrl != "" ? "bg-green-600" : "bg-green-200"}`}
                    disabled={newImageUrl == ""}
                    onClick={handleAdd}>Add New</button>
            </div>
        </section>
    )
}