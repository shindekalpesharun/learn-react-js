import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from './Image';

export default function Images() {
    const [Images, setImages] = useState([
        'https://images.unsplash.com/photo-1636224358189-182d4886cf14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        'https://images.unsplash.com/photo-1636934432265-7b770c648a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80',
        'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=961&q=80',
    ])

    const inputRef = useRef(null)
    const varRef = useRef(Images.length);
    useEffect(() => {
        inputRef.current.focus();
        console.log(varRef);
    }, [])

    const [myName, setmyName] = useState('kalpesh')

    useEffect(() => {
        console.log('im use effect 1');
        // setUpdateCount(updateCount + 1);
        // console.log(updateCount);
    })

    useLayoutEffect(() => {
        setmyName('reactJs')
        console.log('im use effect 2');
    })

    const [newImageUrl, setNewImageUrl] = useState("")

    function ShowImage() {
        return Images.map((img, index) => <Image
            image={img}
            handlRemove={handlRemove}
            key={index}
            index={index} />);
    }

    function handlRemove(index) {
        // setImages(Images.filter((Images, i) => i != index));
        setImages([...Images.slice(0, index), ...Images.slice(index + 1, Images.length)])
        console.log(`im changing state`);
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
            <p>{myName}</p>
            <h1>{varRef.current} Images</h1>
            <p>Component is updated {varRef.current} times</p>
            <div className="flex flex-wrap ">
                <ShowImage />
            </div>
            <div className="flex mt-3 gap-2">
                <input
                    type='text'
                    id="inputBox"
                    ref={inputRef}
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