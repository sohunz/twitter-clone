import React, { useState } from "react";
import ToggleContext from "./ToggleContext";

const ToggleProvider = ({ children }) => {
    const [isToggle, setToggle] = useState(false);

    return (
        <ToggleContext.Provider value={{ isToggle, setToggle }}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleProvider;
