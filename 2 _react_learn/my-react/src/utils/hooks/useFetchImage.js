import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = process.env.REACT_APP_BASE_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(pageNumber) {
    const [Images, setImages] = useState([])
    const [error, setError] = useState([]);
    useEffect(() => {
        axios.get(`${url}?client_id=${secret}&page=${pageNumber}`)
            .then((res) => {
                setImages([...Images, ...res.data]);
            }).catch((e) => {
                setError(e.response.data.errors);
            });
    }, [pageNumber]);

    return [Images, setImages, error];
}
