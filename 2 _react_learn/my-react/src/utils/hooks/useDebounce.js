import React, { useState } from 'react'

export default function useDebounce() {
    const [TypingTimeout, setTypingTimeout] = useState("");
    function Debounce(func, wait = 1000) {
        clearTimeout(TypingTimeout);
        const timeout = setTimeout(() =>
            func()
            , wait);
        setTypingTimeout(timeout);
    }
    return Debounce;
}
