import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const [theme, setTheme] = useState(savedTheme);

    // Update local storage whenever theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
};

export default ThemeProvider;
