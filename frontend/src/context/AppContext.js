



import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    // Initial state ko localStorage se set karein
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    });

    // Jab bhi `isLoggedIn` state change ho, localStorage ko update karein
    useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const value = {
        isLoggedIn,
        setIsLoggedIn
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}
