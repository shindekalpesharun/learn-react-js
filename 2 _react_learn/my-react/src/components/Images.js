import React, { useState } from 'react'
import Image from './Image';
import useFetchImage from '../utils/hooks/useFetchImage';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from '../utils/hooks/useDebounce';

export default function Images() {
    const [Page, setPage] = useState(1);
    const [SearchTerm, setSearchTerm] = useState('random');
    const [Images, setImages, error, isLoading] = useFetchImage(Page, SearchTerm);

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
                        image={img.urls.thumb}
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

    const debounce = useDebounce();
    function handleInput(e) {
        const text = e.target.value;
        debounce(() => setSearchTerm(text))
    }

    return (
        <section >
            <div className='my-5'>
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder='Search'
                    className='w-full border rounded shadow p-2'
                />
            </div>
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