import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = process.env.REACT_APP_BASE_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

export default function useFetchImage(pageNumber, SearchTerm) {
    const [Images, setImages] = useState([])
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${url}/search/photos?client_id=${secret}&page=${pageNumber}&query=${SearchTerm}`)
            .then((res) => {
                setImages([...res.data.results]);
                setIsLoading(false);
            }).catch((e) => {
                console.log(e)
                setError("Unable to fetch images");
                setIsLoading(false);
            });
    }, [pageNumber, SearchTerm]);

    return [Images, setImages, error, isLoading];
}
