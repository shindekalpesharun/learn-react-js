import React, { useState } from 'react'
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export default function Images() {
    const [Page, setPage] = useState(1);
    const [Images, setImages, error, isLoading] = useFetchImage(Page);

    function ShowImage() {
        return (
            <InfiniteScroll
                dataLength={Images.length}
                next={() => setPage(Page + 1)}
                hasMore={true}
                className='flex flex-wrap'
            >
                {Images.map((img, index) => (
                    <Image
                        image={img.urls.small}
                        handlRemove={handlRemove}
                        key={index}
                        index={index}
                    />
                ))}
            </InfiniteScroll>
        )
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
            <ShowImage />
            {isLoading && <Loading />}
        </section>
    )
}