import React, { useEffect, useRef, useState } from 'react'
import Image from './Image';
import Axios from "axios";
import useScroll from '../utils/hooks/useScroll';

export default function Images() {
    const [Images, setImages] = useState([])
    const scrollPosition = useScroll();

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
        Axios.get(`${process.env.REACT_APP_BASE_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
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

    return (
        <section >
            {scrollPosition}
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
                // onChange={handleChange}
                />
                <button
                    className={`text-white ${newImageUrl != "" ? "bg-green-600" : "bg-green-200"}`}
                    disabled={newImageUrl == ""}
                    onClick={handleAdd}>Add New</button>
            </div>
        </section>
    )
}