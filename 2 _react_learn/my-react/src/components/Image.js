import React, { useState } from 'react'

export default function Image({ index, image, handlRemove, key }) {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div className="w-1/3 p-1 border flex justify-center" key={index}>
            <div className='relative'
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)} >
                <i className={`fas fa-times absolute right-0 cursor-pointer text-gray-200 opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`} onClick={() => handlRemove(index)}></i>
                <img src={image} alt="error"
                    width="100%" height="auto" />
            </div>
        </div >
    )
}
