import { useEffect, useState } from "react";

// хук для работы с локальным storage
export const useLocalStorage = (initialValue: any, key: any) => {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string or null
    if (storage) return JSON.parse(storage);
    return initialValue;
  };
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
