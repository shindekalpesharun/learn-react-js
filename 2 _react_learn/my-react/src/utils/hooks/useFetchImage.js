import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = process.env.REACT_APP_BASE_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(pageNumber) {
    const [Images, setImages] = useState([])
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}?client_id=${secret}&page=${pageNumber}`)
            .then((res) => {
                setImages([...Images, ...res.data]);
                setIsLoading(false);
            }).catch((e) => {
                setError("Unable to fetch images");
                setIsLoading(false);
            });
    }, [pageNumber]);

    return [Images, setImages, error, isLoading];
}
