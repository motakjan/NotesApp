import { useEffect, useState } from 'react';

const PREFIX = 'notes-app-';

export const useLocalStorage = (key: string, initialValue?: (() => string) | string) => {
  const prefixedKey: string = PREFIX + key;
  const [value, setValue] = useState<string | null>(() => {
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
