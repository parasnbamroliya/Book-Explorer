import { useState } from 'react';


export default function useLocalStorage(key, initialValue) {
    const [state, setState] = useState(() => {
        try {
            const raw = window.localStorage.getItem(key);
            return raw ? JSON.parse(raw) : initialValue;
        } catch (e) {
            return initialValue;
        }
    });


    const setValue = (val) => {
        try {
            const valueToStore = val instanceof Function ? val(state) : val;
            setState(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
            // ignore
        }
    };


    return [state, setValue];
}