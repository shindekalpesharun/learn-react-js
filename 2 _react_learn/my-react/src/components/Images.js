import React, { useState } from 'react'
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';

export default function Images() {
    const [Page, setPage] = useState(1);
    const [Images, setImages, error] = useFetchImage(Page);

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

    return (
        <section >
            {error.length > 0 &&
                <div className='flex'>
                    <p className='m-auto'>{error}</p>
                </div>
            }

            <div className="gap-0" style={{ columnCount: 5 }}>
                <ShowImage />
            </div>
            {error.length === 0 && <button onClick={() => { setPage(Page + 1) }}>Load More</button>}
        </section>
    )
}