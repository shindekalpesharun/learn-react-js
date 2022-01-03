import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from './Image';
import Axios from "axios";

export default function Images() {
    const [Images, setImages] = useState([])

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
        Axios.get('https://api.unsplash.com/photos/?client_id=vQLX4hsgGzKBd0RPuJGcHaNgZTnGwm6nyPUJMAvVnPE')
            .then((res) => {
                setImages(res.data);
                console.log(res.data);
            })
    }, [])

    const [newImageUrl, setNewImageUrl] = useState("")

    function ShowImage() {
        return Images.map((img, index) =>
            <Image
                image={img.urls.small}
                handlRemove={handlRemove}
                key={index}
                index={index} />
        );
    }

    function handlRemove(index) {
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
            <h1>{varRef.current} Images</h1>
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