import { useState } from "react";


export function useLocalStorageState(key: string, defaultValue: string | boolean): any[] {
    const value = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue;
    const [_, setValue] = useState(true);
    
    return [value, (newValue: string) => {
        localStorage.setItem(key,JSON.stringify(newValue));
        setValue(!_);
    }]

}