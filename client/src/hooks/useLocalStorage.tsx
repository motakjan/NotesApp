import { useState, useEffect } from 'react';

const PREFIX = 'notes-app-';

export const useLocalStorage = (key: string, initialValue?: any) => {
    const prefixedKey: string = PREFIX + key;
    const [value, setValue] = useState<any | null>(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue) return JSON.parse(jsonValue);
        if (typeof initialValue === 'function') {
            return initialValue();
        } 
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
};
