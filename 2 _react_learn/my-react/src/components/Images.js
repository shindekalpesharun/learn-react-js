import React, { useState } from 'react'
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading';

export default function Images() {
    const [Page, setPage] = useState(1);
    const [Images, setImages, error, isLoading] = useFetchImage(Page);

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

    if (isLoading)
        return <Loading />

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