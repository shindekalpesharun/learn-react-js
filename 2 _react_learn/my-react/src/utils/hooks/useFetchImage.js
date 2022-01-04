import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = process.env.REACT_APP_BASE_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(pageNumber) {
    const [Images, setImages] = useState([])
    useEffect(() => {
        axios.get(`${url}?client_id=${secret}&page=${pageNumber}`).then((res) => {
            setImages([...Images, ...res.data]);
        });
    }, [pageNumber]);

    return [Images, setImages];
}
